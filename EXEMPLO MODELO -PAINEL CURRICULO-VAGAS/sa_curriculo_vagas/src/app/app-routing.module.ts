import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculoComponent } from './view/curriculos/curriculo.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { LoginComponent } from './view/login/login.component';
import { AuthGuard } from './guards/auth-guard';
import { AdminGuard } from './guards/admin-guard';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },

  {
    path: 'curriculos',
    component: CurriculoComponent,
    canActivate: [AuthGuard],
  },
  { path: 'vagas', component: VagasComponent, canActivate: [AuthGuard] },

  {
    path: 'painel-vagas',
    component: PainelVagasComponent,
    canActivate: [AdminGuard],
  },

  { path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
