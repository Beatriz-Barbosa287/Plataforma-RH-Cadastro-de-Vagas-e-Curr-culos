import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  tipoUsuario: string = '';

  constructor() {}

  onCadastro() {
    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    if (this.nome && this.email && this.senha && this.tipoUsuario) {
      alert(`Cadastro realizado com sucesso para ${this.nome}!`);
    } else {
      alert('Preencha todos os campos!');
    }
  }
}
