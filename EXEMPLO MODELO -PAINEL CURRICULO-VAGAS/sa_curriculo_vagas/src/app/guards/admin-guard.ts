import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const usuario = this.authService.usuarioLogado();

    if (usuario && usuario.tipo === 'admin') {
      return true;
    }

    // Se não for admin, volta para a home ou login
    this.router.navigate(['/inicio']);
    return false;
  }
}
