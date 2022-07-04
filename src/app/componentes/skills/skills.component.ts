import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SoftskillService } from 'src/app/servicios/softskill.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillSoft: any;
  roles: string[] = [];
  isAdmin = false;

  constructor(
    private skillSoftService:SoftskillService,
    private router:Router,
    private tokenService: TokenService
    ){}

  ngOnInit(): void {
    this.skillSoftService.getListaSoftSkills().subscribe(data=>{this.skillSoft=data});
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin=true;
      }
    });
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
