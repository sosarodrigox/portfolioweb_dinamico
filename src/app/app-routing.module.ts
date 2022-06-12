import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCarreraComponent } from './componentes/crear-carrera/crear-carrera.component';
import { CrearCursoComponent } from './componentes/crear-curso/crear-curso.component';
import { CrearExperienciaComponent } from './componentes/crear-experiencia/crear-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'portfolio', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'crear-experiencia', component:CrearExperienciaComponent},
  {path:'crear-carrera', component:CrearCarreraComponent},
  {path:'crear-curso', component:CrearCursoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
