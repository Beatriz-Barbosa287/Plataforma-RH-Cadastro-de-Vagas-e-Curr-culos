import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/service/vaga.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss'],
})
export class VagasComponent implements OnInit {
  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagaService) {}

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas() {
    this._vagasService.getVagas().subscribe((retornaVaga) => {
      //mapear os dados da API
      this.vagas = retornaVaga.map((item) => {
        return new Vaga(
          item.id,
          item.nome,
          item.foto,
          item.descricao,
          item.salario
        );
      });
    });
  }
}
