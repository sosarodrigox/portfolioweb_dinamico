import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AboutmeComponent } from './componentes/aboutme/aboutme.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PortfolioService } from './servicios/portfolio.service';
import {HttpClientModule} from '@angular/common/http';
import { CoursesComponent } from './componentes/courses/courses.component';
import { SkillhComponent } from './componentes/skillh/skillh.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './auth/login.component';
import { CrearExperienciaComponent } from './componentes/crear-experiencia/crear-experiencia.component';
import { FormsModule } from '@angular/forms';
import { CrearCarreraComponent } from './componentes/crear-carrera/crear-carrera.component';
import { CrearCursoComponent } from './componentes/crear-curso/crear-curso.component';
import { CrearHardskillComponent } from './componentes/crear-hardskill/crear-hardskill.component';
import { CrearSoftskillComponent } from './componentes/crear-softskill/crear-softskill.component';
import { CrearProyectoComponent } from './componentes/crear-proyecto/crear-proyecto.component';
import { ModificarExperienciaComponent } from './componentes/modificar-experiencia/modificar-experiencia.component';
import { ModificarHeaderComponent } from './componentes/modificar-header/modificar-header.component';
import { ModificarCarreraComponent } from './componentes/modificar-carrera/modificar-carrera.component';
import { ModificarCursoComponent } from './componentes/modificar-curso/modificar-curso.component';
import { ModificarHardskillComponent } from './componentes/modificar-hardskill/modificar-hardskill.component';
import { ModificarSoftskillComponent } from './componentes/modificar-softskill/modificar-softskill.component';
import { ModificarProyectoComponent } from './componentes/modificar-proyecto/modificar-proyecto.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    CoursesComponent,
    SkillhComponent,
    HomeComponent,
    LoginComponent,
    CrearExperienciaComponent,
    CrearCarreraComponent,
    CrearCursoComponent,
    CrearHardskillComponent,
    CrearSoftskillComponent,
    CrearProyectoComponent,
    ModificarExperienciaComponent,
    ModificarHeaderComponent,
    ModificarCarreraComponent,
    ModificarCursoComponent,
    ModificarHardskillComponent,
    ModificarSoftskillComponent,
    ModificarProyectoComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
