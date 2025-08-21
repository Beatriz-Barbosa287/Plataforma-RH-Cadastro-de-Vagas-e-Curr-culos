import { Component, OnInit } from '@angular/core';
import { VagaService } from '../../service/vaga.service'; 

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent implements OnInit {

  vagas: any[] = [];

  constructor(private vagaService: VagaService) {}
  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagaService) {}

