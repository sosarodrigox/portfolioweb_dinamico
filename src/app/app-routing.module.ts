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
import { ModificarHeaderComponent } from './componentes/modificar-header/modificar-header.component';
import { ModificarExperienciaComponent } from './componentes/modificar-experiencia/modificar-experiencia.component';
import { ModificarCarreraComponent } from './componentes/modificar-carrera/modificar-carrera.component';
import { ModificarCursoComponent } from './componentes/modificar-curso/modificar-curso.component';
import { ModificarHardskillComponent } from './componentes/modificar-hardskill/modificar-hardskill.component';
import { ModificarSoftskillComponent } from './componentes/modificar-softskill/modificar-softskill.component';
import { ModificarProyectoComponent } from './componentes/modificar-proyecto/modificar-proyecto.component';

const routes: Routes = [
  {path:'portfolio', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'modificar-header/:id',component:ModificarHeaderComponent},
  {path:'crear-experiencia', component:CrearExperienciaComponent},
  {path:'modificar-experiencia/:id_exp', component:ModificarExperienciaComponent},
  {path:'crear-carrera', component:CrearCarreraComponent},
  {path:'modificar-carrera/:id_carrera',component:ModificarCarreraComponent},
  {path:'crear-curso', component:CrearCursoComponent},
  {path:'modificar-curso/:id_curso',component:ModificarCursoComponent},
  {path:'crear-hardskill', component:CrearHardskillComponent},
  {path:'modificar-hardskill',component:ModificarHardskillComponent},
  {path:'crear-softskill', component:CrearSoftskillComponent},
  {path:'modificar-softskill',component:ModificarSoftskillComponent},
  {path:'crear-proyecto', component:CrearProyectoComponent},
  {path:'modificar-proyecto',component:ModificarProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
