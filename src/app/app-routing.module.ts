import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCarreraComponent } from './componentes/crear-carrera/crear-carrera.component';
import { CrearCursoComponent } from './componentes/crear-curso/crear-curso.component';
import { CrearExperienciaComponent } from './componentes/crear-experiencia/crear-experiencia.component';
import { CrearHardskillComponent } from './componentes/crear-hardskill/crear-hardskill.component';
import { CrearProyectoComponent } from './componentes/crear-proyecto/crear-proyecto.component';
import { CrearSoftskillComponent } from './componentes/crear-softskill/crear-softskill.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'portfolio', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'crear-experiencia', component:CrearExperienciaComponent},
  {path:'crear-carrera', component:CrearCarreraComponent},
  {path:'crear-curso', component:CrearCursoComponent},
  {path:'crear-hardskill', component:CrearHardskillComponent},
  {path:'crear-softskill', component:CrearSoftskillComponent},
  {path:'crear-proyecto', component:CrearProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
