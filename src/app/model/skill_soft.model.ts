export class skill_soft {
    id_softskill?: number;
    skill: String;
    descripcion: String;
    porcentaje: number;

    constructor(skill: String,
        descripcion: String,
        porcentaje: number) {
        this.skill = skill;
        this.descripcion = descripcion;
        this.porcentaje = porcentaje;
    }
}