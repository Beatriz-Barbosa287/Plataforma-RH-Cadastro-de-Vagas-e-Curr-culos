import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent {
  constructor(private router: Router) {}

  cadastrar() {
    this.router.navigate(['/login']);
  }
}
