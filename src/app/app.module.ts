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
import { BotonHeaderComponent } from './componentes/boton-header/boton-header.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { CrearExperienciaComponent } from './componentes/crear-experiencia/crear-experiencia.component';
import { FormsModule } from '@angular/forms';
import { CrearCarreraComponent } from './componentes/crear-carrera/crear-carrera.component';
import { CrearCursoComponent } from './componentes/crear-curso/crear-curso.component';
import { CrearHardskillComponent } from './componentes/crear-hardskill/crear-hardskill.component';
import { CrearSoftskillComponent } from './componentes/crear-softskill/crear-softskill.component';
import { CrearProyectoComponent } from './componentes/crear-proyecto/crear-proyecto.component';

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
    BotonHeaderComponent,
    HomeComponent,
    LoginComponent,
    CrearExperienciaComponent,
    CrearCarreraComponent,
    CrearCursoComponent,
    CrearHardskillComponent,
    CrearSoftskillComponent,
    CrearProyectoComponent
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
