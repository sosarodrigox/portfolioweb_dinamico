import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearExperienciaComponent } from './componentes/crear-experiencia/crear-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'portfolio', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'crear-experiencia', component:CrearExperienciaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
