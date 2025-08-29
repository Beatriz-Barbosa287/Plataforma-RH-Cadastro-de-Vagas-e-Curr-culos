import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const logado =
      this.authService.estaLogado() ||
      sessionStorage.getItem('usuarioLogado') === 'true';

    if (!logado) {
      this.router.navigate(['/login']);
      return false;
    }

    const autorizado = route.data['autorizado'];
    const usuario = this.authService.usuarioLogado();

    if (autorizado && usuario?.tipo !== autorizado) {
      this.router.navigate(['/inicio']);
      return false;
    }

  canActivate(): boolean {
    const usuarioLogado = !!localStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
