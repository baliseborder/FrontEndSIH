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
  constructor( private personnelService:PersonnelService ,private router:Router) { }

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

/* onEditHosp(h){    
    debugger
    let url2="http://localhost:8087/api/v1/hospitalisation/"+h.idHosp;
      console.log(url2);
      this.router.navigateByUrl("/editHospi/"+btoa(url2))
  }*/

 
   //onEditService(s)
   onEditPersonne(pr){    
    debugger
    let url2="http://localhost:8087/api/v1/updatPersonne/"+pr.idPersonne;
      console.log(url2);
    this.router.navigateByUrl("/editPersonne/"+btoa(url2))
  }
  

}
