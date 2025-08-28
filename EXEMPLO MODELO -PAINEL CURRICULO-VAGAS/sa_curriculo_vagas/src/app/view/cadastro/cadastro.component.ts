import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router) {}

  onCadastro() {
    if (
      !this.nome ||
      !this.email ||
      !this.senha ||
      !this.confirmarSenha ||
      !this.tipoUsuario
    ) {
      alert('Preencha todos os campos!');
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    const novoUsuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      tipoUsuario: this.tipoUsuario,
    };

    this.http.post('http://localhost:3005/usuarios', novoUsuario).subscribe({
      next: () => {
        alert(`Cadastro realizado com sucesso para ${this.nome}!`);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro ao cadastrar:', err);
        alert('Erro ao cadastrar usuário.');
      },
    });
  }
}
