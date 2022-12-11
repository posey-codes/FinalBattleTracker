import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { Creature } from './creature'
import { EditComponent } from '../edit/edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-battletracker',
  templateUrl: './battletracker.component.html',
  styleUrls: ['./battletracker.component.css']
})
export class BattletrackerComponent implements OnInit {

  // Starting Array //
 creatures:Creature[] = [
    {name: 'Player1', health: 50, initiative: 1, id: 1},
  ];

  drop(event: CdkDragDrop<Creature[]>) {
    moveItemInArray(this.creatures, event.previousIndex, event.currentIndex);
  }

  // Finds creature in array and deletes it //
  delete(deleteCreature: Creature)
  {
    this.creatures.forEach((element, index)=>{
      if (element.id == deleteCreature.id)
      {
        this.creatures.splice(index, 1);
      }
    }); 
  }

  // Pushes a new EMPTY creature into array //
  addNew(){
    let emptyCreature = new Creature("EMPTY", 0, 0, 0);
    emptyCreature.id = this.creatures.length + 1;

    this.creatures.push(emptyCreature);
  }

  // Opens dialog "EditComponent", then takes information entered and edits the creature in the array //
  editCreature(editCreature: Creature)
  {
    let dialog = this.dialog.open(EditComponent);

    dialog.afterClosed().subscribe( result => {
      this.creatures.forEach((element, index)=>{
        if (element.id == editCreature.id)
        {
          editCreature.name = result.name;
          editCreature.health = result.health;
          editCreature.initiative = result.initiative;
        }
      }); 
    });
    
  }
  
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

}

