import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skill_soft } from '../model/skill_soft.model';

@Injectable({
  providedIn: 'root'
})
export class SoftskillService {

  URL = 'https://fast-ocean-60172.herokuapp.com/'

  constructor(private http: HttpClient) { }

  public getListaSoftSkills():Observable<skill_soft>{
    return this.http.get<skill_soft>(this.URL+'Ver/lista-skill-s');
  }

  public crearSoftSkill(softskill:skill_soft):Observable<Object>{
    return this.http.post(this.URL+'nueva/s_skill',softskill);
  }

   //Este método sirve para obtener o buscar un hardSkill.
   public traerSkillSoftPorId(id:number):Observable<skill_soft>{
    return this.http.get<skill_soft>(`${this.URL+'traer-skill-s/'}${id}`);
  }

  public modificarSkillSoft(id:number, skillSoft:skill_soft):Observable<Object>{
    return this.http.put(this.URL+'modif-softskill/'+id,skillSoft);
  }

  public borrarSkillSoft(id:number):Observable<Object>{
    return this.http.delete(`${this.URL+'borrar-skill-s/'}${id}`);
  }
}