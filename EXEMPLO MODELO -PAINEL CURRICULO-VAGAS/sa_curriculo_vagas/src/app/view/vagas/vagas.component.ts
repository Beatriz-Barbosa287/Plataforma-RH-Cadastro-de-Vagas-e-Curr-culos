import { Component, OnInit } from '@angular/core';
import { VagasService } from '../../service/vaga.service'; 
import { Vaga } from 'src/app/models/vaga.model';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent implements OnInit {

  public vagas: Vaga[] = [];
  currentYear: number = new Date().getFullYear();

  constructor(private vagaService: VagasService) {}
  ngOnInit(): void {
    throw new Error('Erro');
  }

  candidatar(vaga: any) {
    alert(`Candidatura enviada para a vaga: ${vaga.titulo}`);
  }
}
