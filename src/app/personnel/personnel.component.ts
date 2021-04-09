import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {PersonnelService} from'../Services/personnel.service';
import {Personnel} from'../model/personnel.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  
currentPersonne:Personnel=new Personnel()
public mode:number=1;
 //nom service 
 serviceNames;

//liste nom service 
servicesNames=[];
 constructor(private personneService:PersonnelService,private activatedRoute:ActivatedRoute,
  private router:Router ) { }

  ngOnInit(): void {
    this.getServicesNames(); 
    
  }
  
  onSavePersonnel(){
                debugger
                this.personneService.saveResource(this.currentPersonne)
               .subscribe(res=>{
                 debugger
                //console.log(res);
                //this.router.navigateByUrl("/personnel")
                this.currentPersonne=res
                alert("L'Objet est Ajouter avec Succes")
                this.mode=2;
                    },err=>{
                  console.log(err);
                })


  } 
  
  getServicesNames(){
    this.personneService.getServicesNames().subscribe(
      resp=>{
        this.serviceNames=resp;
        this.servicesNames=this.serviceNames;
        console.log(this.serviceNames)
      }

    )
  } 
  onNewPesonne(){
    this.currentPersonne =  new Personnel()
         this.mode=1;}

}
