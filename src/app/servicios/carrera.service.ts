import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { edu_carrera } from '../model/edu_carrera.model';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  URL = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  public getListaCarreras():Observable<edu_carrera>{
    return this.http.get<edu_carrera>(this.URL+'ver/lista-carreras');
  }
}
