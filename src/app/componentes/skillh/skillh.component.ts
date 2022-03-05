import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skillh',
  templateUrl: './skillh.component.html',
  styleUrls: ['./skillh.component.css']
})
export class SkillhComponent implements OnInit {
  skillList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.skillList=data.skill_hard;
    })
  }

}
