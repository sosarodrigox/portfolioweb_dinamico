import { Component, OnInit } from '@angular/core';
import { HardskillService } from 'src/app/servicios/hardskill.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skillh',
  templateUrl: './skillh.component.html',
  styleUrls: ['./skillh.component.css']
})
export class SkillhComponent implements OnInit {

  skillHard: any;

  constructor(private skillHardService:HardskillService){}

  ngOnInit(): void {
    this.skillHardService.getListaHardSkills().subscribe(data=>{this.skillHard=data})
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
