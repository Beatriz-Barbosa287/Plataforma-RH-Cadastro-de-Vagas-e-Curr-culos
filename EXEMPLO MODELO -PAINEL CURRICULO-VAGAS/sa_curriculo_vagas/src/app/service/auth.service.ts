import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  cadastrar(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }

  login(email: string, senha: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&senha=${senha}`);
  }
}
