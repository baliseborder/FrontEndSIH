import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personnel } from '../model/personnel.model';
import { PersonnelService } from '../Services/personnel.service';

@Component({
  selector: 'app-edit-personne',
  templateUrl: './edit-personne.component.html',
  styleUrls: ['./edit-personne.component.css']
})
export class EditPersonneComponent implements OnInit {

  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
    private personnelService:PersonnelService) { }  
  currentPersonne:Personnel=new Personnel();
  private url: string;  
  idpersonne;  
  ngOnInit(): void { 
this.url=atob(this.activatedRoute.snapshot.params.id);  
  this.personnelService.getResource(this.url)
    .subscribe(data=>{
      this.currentPersonne=data;
      this.idpersonne=data.idPersonne
      console.log(this.idpersonne);
    },err=>{
      console.log(err);
    }) 
   // this.listPersonne()

  }
onUpdatePersonne(value: any){    
       console.log(this.idpersonne) 
  this.personnelService.updateResource("http://localhost:8087/api/v1/UpdatePersonnel/"+this.idpersonne,value)
    .subscribe(data=>{
     alert("Mise a jour a effectuee avec succes")
     
    },err=>{
      console.log(err);
    })     
}
}