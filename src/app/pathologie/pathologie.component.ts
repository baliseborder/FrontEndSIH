import { Component, OnInit } from '@angular/core';
/*import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {MatExpansionModule} from '@angular/material/expansion';*/
import {PathologieService} from'../Services/pathologie.service';
import { Pathologie} from '../model/pathologie.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pathologie',
  templateUrl: './pathologie.component.html',
  styleUrls: ['./pathologie.component.css'],
})
export class PathologieComponent implements OnInit {
 
public currentPathologie: Pathologie = new Pathologie()
serviceNames;
//liste nom service 
servicesNames=[];

public mode:number=1;

constructor(private pathologieService:PathologieService,
            private activatedRoute:ActivatedRoute,
            private router:Router ) {   }
  ngOnInit(): void {
    this.getServicesNames(); 
  }
  //Ajout===========================================================================
    onSavePathologie(){
   debugger
   return this.pathologieService.saveResource(this.currentPathologie)
   .subscribe(res=>{
    this.currentPathologie=res
    //console.log(this.currentPathologie.idPath)
    alert("donnes ajouter avec succes ")
    this.mode=2;
          },err=>{
              console.log(err);
            })
  }

  onNewPathologie(){
    this.mode=1;
    this.currentPathologie= new Pathologie();
  }

  //Liste tri nom des services 
 getServicesNames(){
    this.pathologieService.getServicesNames().subscribe(
      resp=>{
        debugger
        this.serviceNames=resp;
        this.servicesNames=this.serviceNames;
        console.log(this.serviceNames)
      })
  }

}