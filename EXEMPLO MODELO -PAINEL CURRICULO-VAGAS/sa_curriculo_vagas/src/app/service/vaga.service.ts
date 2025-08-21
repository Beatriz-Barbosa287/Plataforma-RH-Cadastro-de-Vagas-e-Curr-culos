import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root',
})
export class VagaService {
  private apiUrl = 'http://localhost:3009/vagas'; // JSON Server ou backend

  constructor(private http: HttpClient) {}

  // ➝ Listar todas as vagas
  getVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  // ➝ Cadastrar vaga (Admin)
  cadastrarVaga(vaga: Vaga): Observable<Vaga> {
    return this.http.post<Vaga>(this.apiUrl, vaga);
  }

  // ➝ Atualizar vaga (Admin)
  atualizarVaga(id: number, vaga: Vaga): Observable<Vaga> {
    const urlAtualizar = `${this.apiUrl}/${id}`;
    return this.http.put<Vaga>(urlAtualizar, vaga);
  }

  // ➝ Remover vaga (Admin)
  removerVaga(id: number): Observable<void> {
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(urlDeletar);
  }
}
