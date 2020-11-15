import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonnelComponent } from '../personnel/personnel.component';
import { PersonnelService } from '../Services/personnel.service';

@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.css']
})
export class ListPersonnelComponent implements OnInit {
  personne;
  constructor( private personnelService:PersonnelService ,private route:Router) { }

  ngOnInit(): void {
   this.listPersonne()
  }

  listPersonne(){
    this.personnelService.listPersonnes().subscribe(
      data => {
        this.personne = data;
      },err=>{
        console.log(err);
     
      }
    )
  }
  //Delete
    
    onDelete(idPersonne){
    debugger
     this.personnelService.delete(idPersonne).subscribe(
        data => {
           this.listPersonne()
        }
     )
     alert("la Suppression est fait avec succes")

  }

 

}
