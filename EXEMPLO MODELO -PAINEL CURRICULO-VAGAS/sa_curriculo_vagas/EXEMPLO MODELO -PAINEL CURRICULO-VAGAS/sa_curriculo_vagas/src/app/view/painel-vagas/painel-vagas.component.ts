import { Component } from '@angular/core';

interface Vaga {
  id: number;
  nome: string;
  foto: File | null;
  descricao: string;
  salario: number;
}

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent {
  vaga: Vaga = { id: 0, nome: '', foto: null, descricao: '', salario: 0 };
  vagas: Vaga[] = [];

  cadastrar() {
    this.vagas.push({ ...this.vaga });
    this.limparFormulario();
  }

  atualizar(id: number) {
    const index = this.vagas.findIndex(v => v.id === id);
    if (index !== -1) {
      this.vagas[index] = { ...this.vaga };
      this.limparFormulario();
    }
  }

  excluir(id: number) {
    this.vagas = this.vagas.filter(v => v.id !== id);
  }

  listarVagaUnica(vaga: Vaga) {
    this.vaga = { ...vaga }; // Populate the form with selected job details
  }

  private limparFormulario() {
    this.vaga = { id: 0, nome: '', foto: null, descricao: '', salario: 0 };
  }
}
