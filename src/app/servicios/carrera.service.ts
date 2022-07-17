import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { edu_carrera } from '../model/edu_carrera.model';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  URL = 'https://fast-ocean-60172.herokuapp.com/'

  constructor(private http: HttpClient) { }

  public getListaCarreras():Observable<edu_carrera>{
    return this.http.get<edu_carrera>(this.URL+'ver/lista-carreras');
  }

  public crearCarrera(carrera:edu_carrera):Observable<Object>{
    return this.http.post(this.URL+'nueva/carrera',carrera);
  }

  //Este método sirve para obtener o buscar una carrera.
  public traerCarreraPorId(id:number):Observable<edu_carrera>{
    return this.http.get<edu_carrera>(`${this.URL+'traer-carrera/'}${id}`);
  }

  public modificarCarrera(id:number, carrera:edu_carrera):Observable<Object>{
    return this.http.put(this.URL+'modif-carrera/'+id,carrera);
  }

  public borrarCarrera(id:number):Observable<Object>{
    return this.http.delete(`${this.URL+'borrar-carrera/'}${id}`);
  }

}
