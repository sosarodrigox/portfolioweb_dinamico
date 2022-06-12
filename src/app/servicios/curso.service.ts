import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { edu_curso } from '../model/edu_curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  URL = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  public getListaCursos():Observable<edu_curso>{
    return this.http.get<edu_curso>(this.URL+'ver/lista-cursos');
  }

  public crearCurso(curso:edu_curso):Observable<Object>{
    return this.http.post(this.URL+'nuevo/curso',curso);
  }
}
