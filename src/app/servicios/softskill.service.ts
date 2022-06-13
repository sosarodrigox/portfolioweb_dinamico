import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skill_soft } from '../model/skill_soft.model';

@Injectable({
  providedIn: 'root'
})
export class SoftskillService {

  URL = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  public getListaSoftSkills():Observable<skill_soft>{
    return this.http.get<skill_soft>(this.URL+'Ver/lista-skill-s');
  }

  public crearSoftSkill(softskill:skill_soft):Observable<Object>{
    return this.http.post(this.URL+'nueva/s_skill',softskill);
  }
}
