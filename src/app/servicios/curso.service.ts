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

  //Este método sirve para obtener o buscar un curso.
  public traerCursoPorId(id:number):Observable<edu_curso>{
    return this.http.get<edu_curso>(`${this.URL+'traer-curso/'}${id}`);
  }

  public modificarCurso(id:number, curso:edu_curso):Observable<Object>{
    return this.http.put(this.URL+'modif-curso/'+id,curso);
  }

  public borrarCurso(id:number):Observable<Object>{
    return this.http.delete(`${this.URL+'borrar-curso/'}${id}`);
  }
}
