import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3010/usuarios'; // URL do json-server

  constructor(private http: HttpClient) {}

  // Registrar Usuário
  register(email: string, senha: string): Observable<any> {
    const newUser  = { email, senha, tipo: 'comum' };
    return this.http.post(this.apiUrl, newUser );
  }

  // Login
  login(email: string, senha: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => users.find(user => user.email === email && user.senha === senha))
    );
  }

  // Logout
  logout(): void {
    localStorage.removeItem('usuario');
  }

  // Verificar Autenticação
  isAuthenticated(): boolean {
    return !!localStorage.getItem('usuario');
  }

  // Armazenar usuário no localStorage
  setUser (user: any): void {
    localStorage.setItem('usuario', JSON.stringify(user));
  }

  // Obter usuário atual
  usuarioAtual(): any {
    return JSON.parse(localStorage.getItem('usuario') || '{}');
  }
}
