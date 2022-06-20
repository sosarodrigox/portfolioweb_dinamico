import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { skill_hard } from 'src/app/model/skill_hard.model';
import { HardskillService } from 'src/app/servicios/hardskill.service';

@Component({
  selector: 'app-modificar-hardskill',
  templateUrl: './modificar-hardskill.component.html',
  styleUrls: ['./modificar-hardskill.component.css']
})
export class ModificarHardskillComponent implements OnInit {

  id:any;
  skill_hard:any

  constructor(private route:ActivatedRoute, private hardSkillService:HardskillService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id_hardskill'];
    this.skill_hard = new skill_hard("","",0);
    this.hardSkillService.traerSkillHardPorId(this.id).subscribe(dato =>{
      this.skill_hard = dato;
    });
  }

  modificarHardSkill(){
    this.hardSkillService.modificarSkillHard(this.id, this.skill_hard).subscribe(dato =>{
      console.log(dato);
      this.volverPortfolio();
    });
  }

  volverPortfolio(){
    this.router.navigate(['/portfolio']);
  }

  onSubmit(){
    this.modificarHardSkill();
  }
}
