import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VagasService {
  private apiUrl = 'http://localhost:3010/vagas'; // URL do json-server

  constructor(private http: HttpClient) {}

  // Criar Vaga
  createVaga(vaga: any): Observable<any> {
    return this.http.post(this.apiUrl, vaga);
  }

  // Editar Vaga
  editVaga(id: number, vaga: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, vaga);
  }

  // Excluir Vaga
  deleteVaga(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Listar Vagas
  getVagas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Visualizar Vaga Específica
  getVaga(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
