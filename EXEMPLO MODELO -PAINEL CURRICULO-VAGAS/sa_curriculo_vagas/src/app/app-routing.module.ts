import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculoComponent } from './view/curriculos/curriculo.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [
  { path: 'curriculos', component: CurriculoComponent },
  { path: 'vagas', component: VagasComponent },
  { path: 'painel-vagas', component: PainelVagasComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
