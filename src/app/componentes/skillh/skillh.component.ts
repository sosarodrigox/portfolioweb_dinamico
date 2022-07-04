import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardskillService } from 'src/app/servicios/hardskill.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skillh',
  templateUrl: './skillh.component.html',
  styleUrls: ['./skillh.component.css']
})
export class SkillhComponent implements OnInit {

  skillHard: any;
  roles: string[] = [];
  isAdmin = false;

  constructor(
    private skillHardService:HardskillService,
     private router:Router,
     private tokenService: TokenService
     ){}

  ngOnInit(): void {
    this.skillHardService.getListaHardSkills().subscribe(data=>{this.skillHard=data});
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin=true;
      }
    });
  }

  crearHardSkill(){
    this.router.navigate(['/crear-hardskill'])
  }
  
  modificarHardSkill(id:number){
    this.router.navigate(['/modificar-hardskill',id]);
  }

  borrarHardSkill(id:number){
    this.skillHardService.borrarSkillHard(id).subscribe(dato =>{
      console.log(dato);
      this.ngOnInit();
    });
  }
}
