import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { skill_soft } from 'src/app/model/skill_soft.model';
import { SoftskillService } from 'src/app/servicios/softskill.service';

@Component({
  selector: 'app-crear-softskill',
  templateUrl: './crear-softskill.component.html',
  styleUrls: ['./crear-softskill.component.css']
})
export class CrearSoftskillComponent implements OnInit {

  skillSoft: skill_soft = new skill_soft("","",0)

  constructor(private softSkillService:SoftskillService, private router:Router) { }

  ngOnInit(): void {
  }

  crearSoftSkill(){
    this.softSkillService.crearSoftSkill(this.skillSoft).subscribe(dato=>{
      console.log(dato);
      this.volverPortfolio();
    });
  }

  volverPortfolio(){
    this.router.navigate(['/home']);
  }

  onSubmit(){
    this.crearSoftSkill();
  }
}
