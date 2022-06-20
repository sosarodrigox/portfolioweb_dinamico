import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SoftskillService } from 'src/app/servicios/softskill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillSoft: any;

  constructor(private skillSoftService:SoftskillService,private router:Router){}

  ngOnInit(): void {
    this.skillSoftService.getListaSoftSkills().subscribe(data=>{this.skillSoft=data});
  }

  crearSoftSkill(){
    this.router.navigate(['/crear-softskill'])
  }

  modificarSoftSkill(id:number){
    this.router.navigate(['/modificar-softskill',id]);
  }

  borrarSoftSkill(id:number){
    this.skillSoftService.borrarSkillSoft(id).subscribe(dato =>{
      console.log(dato);
      this.ngOnInit();
    });
  }
}
