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

  //Este método sirve para obtener o buscar un hardSkill.
  public traerSkillHardPorId(id:number):Observable<skill_hard>{
    return this.http.get<skill_hard>(`${this.URL+'traer-skill-h/'}${id}`);
  }

  public modificarSkillHard(id:number, skillHard:skill_hard):Observable<Object>{
    return this.http.put(this.URL+'modif-hardskill/'+id,skillHard);
  }

  public borrarSkillHard(id:number):Observable<Object>{
    return this.http.delete(`${this.URL+'borrar-skill-h/'}${id}`);
  }
}