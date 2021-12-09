import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessoresComponent } from './professores/professores.component';
import { AlunosComponent } from './alunos/alunos.component';
import { DashComponent } from './dash/dash.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '',redirectTo:'dash', pathMatch: 'full'},
  { path: 'dash', component: DashComponent},
  { path: 'alunos', component: AlunosComponent},
  { path: 'perfil', component: PerfilComponent},
  { path : 'professores', component: ProfessoresComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
