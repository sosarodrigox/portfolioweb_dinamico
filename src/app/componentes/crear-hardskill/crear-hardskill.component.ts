import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { skill_hard } from 'src/app/model/skill_hard.model';
import { HardskillService } from 'src/app/servicios/hardskill.service';

@Component({
  selector: 'app-crear-hardskill',
  templateUrl: './crear-hardskill.component.html',
  styleUrls: ['./crear-hardskill.component.css']
})
export class CrearHardskillComponent implements OnInit {

  skillHard: skill_hard = new skill_hard("","",0)

  constructor(private hardSkillService:HardskillService, private router:Router) { }

  ngOnInit(): void {
  }

  crearHardSkill(){
    this.hardSkillService.crearHardSkill(this.skillHard).subscribe(dato =>{
      console.log(dato);
      this.volverPortfolio();
    });
  }

  volverPortfolio(){
    this.router.navigate(['/home']);
  }

  onSubmit(){
    this.crearHardSkill();
  }
}
