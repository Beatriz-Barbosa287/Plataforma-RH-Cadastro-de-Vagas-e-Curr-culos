import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {
  private apiUrl = 'http://localhost:3010/curriculos'; // URL do json-server

  constructor(private http: HttpClient) {}

  // Cadastrar Currículo
  createCurriculo(curriculo: any): Observable<any> {
    return this.http.post(this.apiUrl, curriculo);
  }

  // Listar Currículos
  getCurriculos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Visualizar Currículo Específico
  getCurriculo(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
