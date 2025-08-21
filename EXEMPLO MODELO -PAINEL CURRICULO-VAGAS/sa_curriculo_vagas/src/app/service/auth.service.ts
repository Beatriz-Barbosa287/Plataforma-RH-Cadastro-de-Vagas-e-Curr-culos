import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  login(email: string, senha: string) {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&senha=${senha}`);
  }

  cadastrar(usuario: any) {
    return this.http.post(this.apiUrl, usuario);
  }
}
