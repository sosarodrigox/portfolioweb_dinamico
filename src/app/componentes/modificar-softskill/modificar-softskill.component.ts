import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { skill_soft } from 'src/app/model/skill_soft.model';
import { SoftskillService } from 'src/app/servicios/softskill.service';

@Component({
  selector: 'app-modificar-softskill',
  templateUrl: './modificar-softskill.component.html',
  styleUrls: ['./modificar-softskill.component.css']
})
export class ModificarSoftskillComponent implements OnInit {

  id:any;
  skill_soft:any

  constructor(private route:ActivatedRoute, private softSkillService:SoftskillService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id_softskill'];
    this.skill_soft = new skill_soft("","",0);
    this.softSkillService.traerSkillSoftPorId(this.id).subscribe(dato =>{
      this.skill_soft = dato;
    });
  }
  
  modificarSoftSkill(){
    this.softSkillService.modificarSkillSoft(this.id, this.skill_soft).subscribe(dato =>{
      console.log(dato);
      this.volverPortfolio();
    });
  }

  volverPortfolio(){
    this.router.navigate(['/portfolio']);
  }

  onSubmit(){
    this.modificarSoftSkill();
  }
}
