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

  /*
  skillList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.skillList=data.skill_soft;
    })
  }
  */
}
