import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  tipoUsuario: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email && this.senha && this.tipoUsuario) {
      alert(`Login realizado com sucesso! Bem-vindo, ${this.tipoUsuario}.`);
      this.router.navigate(['/painel-vagas']);
    } else {
      alert('Preencha todos os campos!');
    }
  }
}
