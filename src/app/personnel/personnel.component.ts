import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {PersonnelService} from'../Services/personnel.service';
import {Personnel} from'../model/personnel.model';
@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  
currentPersonne:Personnel=new Personnel()
public mode:number=1;
 constructor(private personneService:PersonnelService ) { }

  ngOnInit(): void {
  }
  onSavePersonnel(){
                debugger
                this.personneService.saveResource(this.currentPersonne)
               .subscribe(res=>{
                //console.log(res);
                //this.router.navigateByUrl("/personnel")
                this.currentPersonne=res
                alert("L'Objet est Ajouter avec Succes")
                this.mode=2;
                    },err=>{
                  console.log(err);
                })


  }  
  onNewPesonne(){
         this.mode=1;}

}
