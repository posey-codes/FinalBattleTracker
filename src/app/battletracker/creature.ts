// Creature Class Construction // 

export class Creature {
    name: string;
    health: number;
    initiative: number;
    id: number;

constructor( name: string, health: number, initiative: number, id: number){
    this.name = name;
    this.health = health;
    this.initiative = initiative;
    this.id = id;
}

}
