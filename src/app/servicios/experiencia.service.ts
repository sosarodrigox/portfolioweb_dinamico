import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'https://fast-ocean-60172.herokuapp.com/'

  constructor(private http: HttpClient) { }

  public getListaExp():Observable<experiencia>{
    return this.http.get<experiencia>(this.URL+'ver/lista-exp');
  }

  public crearExperiencia(experiencia:experiencia):Observable<Object>{
    return this.http.post(this.URL+'nueva/experiencia', experiencia);
  }

  //Este método sirve para obtener o buscar una experiencia.
  public traerExperienciaPorId(id:number):Observable<experiencia>{
    return this.http.get<experiencia>(`${this.URL+'traer-exp/'}${id}`);
  }

  public modificarExperiencia(id:number, experiencia:experiencia):Observable<Object>{
    return this.http.put(this.URL+'modif-exp/'+id,experiencia);
  }

  public borrarExperiencia(id:number):Observable<Object>{
    return this.http.delete(`${this.URL+'borrar-exp/'}${id}`);
  }
}
