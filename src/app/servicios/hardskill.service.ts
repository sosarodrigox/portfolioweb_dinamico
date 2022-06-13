import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skill_hard } from '../model/skill_hard.model';

@Injectable({
  providedIn: 'root'
})
export class HardskillService {

  URL = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  public getListaHardSkills():Observable<skill_hard>{
    return this.http.get<skill_hard>(this.URL+'Ver/lista-skill-h');
  }

  public crearHardSkill(hardskill:skill_hard):Observable<Object>{
    return this.http.post(this.URL+'nueva/h_skill',hardskill);
  }
}
