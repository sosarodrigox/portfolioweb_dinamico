import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardskillService } from 'src/app/servicios/hardskill.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skillh',
  templateUrl: './skillh.component.html',
  styleUrls: ['./skillh.component.css']
})
export class SkillhComponent implements OnInit {

  skillHard: any;

  constructor(private skillHardService:HardskillService, private router:Router){}

  ngOnInit(): void {
    this.skillHardService.getListaHardSkills().subscribe(data=>{this.skillHard=data})
  }

  crearHardSkill(){
    this.router.navigate(['/crear-hardskill'])
  }
  /*
  skillList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.skillList=data.skill_hard;
    })
  }
  */
}
