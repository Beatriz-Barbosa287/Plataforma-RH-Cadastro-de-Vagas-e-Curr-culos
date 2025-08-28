import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  tipoUsuario: string = '';

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  login() {
    if (this.auth.login(this.email, this.senha, this.tipoUsuario)) {
      alert(`Bem-vindo, ${this.tipoUsuario}!`);

      sessionStorage.setItem('usuarioLogado', 'true');
      localStorage.setItem(
        'usuarioLogado',
        JSON.stringify({ email: this.email, tipoUsuario: this.tipoUsuario })
      );

      this.router.navigate(['/vagas']);
    } else {
      this.http
        .get<any[]>(
          `http://localhost:3005/usuarios?email=${this.email}&senha=${this.senha}`
        )
        .subscribe({
          next: (usuarios) => {
            if (usuarios.length > 0) {
              localStorage.setItem(
                'usuarioLogado',
                JSON.stringify(usuarios[0])
              );
              sessionStorage.setItem('usuarioLogado', 'true');
              alert('Login realizado com sucesso!');
              this.router.navigate(['/vagas']);
            } else {
              alert('Credenciais inválidas!');
            }
          },
          error: (err) => {
            console.error('Erro no login:', err);
            alert('Erro ao tentar fazer login!');
          },
        });
    }
  }
}
