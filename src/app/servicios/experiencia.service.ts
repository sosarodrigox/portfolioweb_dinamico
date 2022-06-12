import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  public getListaExp():Observable<experiencia>{
    return this.http.get<experiencia>(this.URL+'ver/lista-exp');
  }

  public crearExperiencia(experiencia:experiencia):Observable<Object>{
    return this.http.post(this.URL+'nueva/experiencia', experiencia);
  }
}
