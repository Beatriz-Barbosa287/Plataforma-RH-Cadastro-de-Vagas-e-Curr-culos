import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  tipoUsuario: string = '';

  onLogin() {
    if (this.email && this.senha && this.tipoUsuario) {
      alert(`Login realizado com sucesso! Bem-vindo, ${this.tipoUsuario}.`);
    } else {
      alert('Preencha todos os campos!');
    }
  }
}
