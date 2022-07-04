import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCarreraComponent } from './componentes/crear-carrera/crear-carrera.component';
import { CrearCursoComponent } from './componentes/crear-curso/crear-curso.component';
import { CrearExperienciaComponent } from './componentes/crear-experiencia/crear-experiencia.component';
import { CrearHardskillComponent } from './componentes/crear-hardskill/crear-hardskill.component';
import { CrearProyectoComponent } from './componentes/crear-proyecto/crear-proyecto.component';
import { CrearSoftskillComponent } from './componentes/crear-softskill/crear-softskill.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './auth/login.component';
import { ModificarHeaderComponent } from './componentes/modificar-header/modificar-header.component';
import { ModificarExperienciaComponent } from './componentes/modificar-experiencia/modificar-experiencia.component';
import { ModificarCarreraComponent } from './componentes/modificar-carrera/modificar-carrera.component';
import { ModificarCursoComponent } from './componentes/modificar-curso/modificar-curso.component';
import { ModificarHardskillComponent } from './componentes/modificar-hardskill/modificar-hardskill.component';
import { ModificarSoftskillComponent } from './componentes/modificar-softskill/modificar-softskill.component';
import { ModificarProyectoComponent } from './componentes/modificar-proyecto/modificar-proyecto.component';
import { IndexComponent } from './index/index.component';
import { RegistroComponent } from './auth/registro.component';
import { PersonaGuardService as guard } from './guards/persona-guard.service';


const routes: Routes = [
  { path: 'portfolio', component: HomeComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: '', component: IndexComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'modificar-header/:id', component: ModificarHeaderComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'crear-experiencia', component: CrearExperienciaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'modificar-experiencia/:id_exp', component: ModificarExperienciaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'crear-carrera', component: CrearCarreraComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'modificar-carrera/:id_carrera', component: ModificarCarreraComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'crear-curso', component: CrearCursoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'modificar-curso/:id_curso', component: ModificarCursoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'crear-hardskill', component: CrearHardskillComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'modificar-hardskill/:id_hardskill', component: ModificarHardskillComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'crear-softskill', component: CrearSoftskillComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'modificar-softskill/:id_softskill', component: ModificarSoftskillComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'crear-proyecto', component: CrearProyectoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'modificar-proyecto/:id_proyecto', component: ModificarProyectoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  {path:'**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
