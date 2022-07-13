import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = 'https://fast-ocean-60172.herokuapp.com/'

  constructor(private http: HttpClient) { }

  public getListaProyectos():Observable<proyecto>{
    return this.http.get<proyecto>(this.URL+'ver/lista-proyecto');
  }

  public crearProyecto(proyecto:proyecto):Observable<Object>{
    return this.http.post(this.URL+'nuevo/proyecto',proyecto);
  }

  //Este método sirve para obtener o buscar un Proyecto.
  public traerProyectoPorId(id:number):Observable<proyecto>{
    return this.http.get<proyecto>(`${this.URL+'traer-proyecto/'}${id}`);
  }

  public modificarProyecto(id:number, proyecto:proyecto):Observable<Object>{
    return this.http.put(this.URL+'modificar-proyecto/'+id,proyecto);
  }

  public borrarProyecto(id:number):Observable<Object>{
    return this.http.delete(`${this.URL+'borrar-proyecto/'}${id}`);
  }
}
