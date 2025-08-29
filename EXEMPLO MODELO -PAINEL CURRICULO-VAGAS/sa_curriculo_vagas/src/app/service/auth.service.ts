import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAtual: any = null;

  constructor(private router: Router) {}

  login(email: string, senha: string, tipo: string): boolean {
    const usuarios = [
      { email: 'admin@site.com', senha: '1234', tipo: 'admin' },
      { email: 'user@site.com', senha: '1234', tipo: 'comum' },
    ];

    const user = usuarios.find(
      (u) => u.email === email && u.senha === senha && u.tipo === tipo
    );

    if (user) {
      this.usuarioAtual = user;
      localStorage.setItem('usuario', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    this.usuarioAtual = null;
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  usuarioLogado() {
    if (!this.usuarioAtual) {
      const userData = localStorage.getItem('usuario');
      this.usuarioAtual = userData ? JSON.parse(userData) : null;
    }
    return this.usuarioAtual;
  }

  isAdmin(): boolean {
    return this.usuarioLogado()?.tipo === 'admin';
  }

  estaLogado(): boolean {
    return !!this.usuarioLogado();
  }
}
