import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Creature } from '../battletracker/creature'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number = 0
  name: string = '';
  health: number = 0;
  initiative: number = 0;
  
  // Edited creature //
  creature:Creature = new Creature(this.name, this.health, this.initiative, this.id);

  // Called before sending information back to the BattletrackerComponent - updates new information //
  finalCreature(){
    this.creature.id = this.id;
    this.creature.name = this.name;
    this.creature.health = this.health;
    this.creature.initiative = this.initiative;
  }

  constructor() { }
  @Output() event = new EventEmitter<string>()
  ngOnInit(): void {
  }

}
