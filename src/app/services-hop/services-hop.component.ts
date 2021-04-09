import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import {ServiceHosp} from '../model/serviceHosp';
import {ServiceHopService} from '../Services/service-hop.service';
//import{HospitalisationService} from'../Services/hospitalisation.service';

@Component({
  selector: 'app-services-hop',
  templateUrl: './services-hop.component.html',
  styleUrls: ['./services-hop.component.css']
})
export class ServicesHOPComponent implements OnInit {
    public currentService:ServiceHosp = new ServiceHosp() ;

//declarer une variable 
mode =1;
public produits:any;
public size:number=5;
public currentPage:number=0;
public totalPages:number;
public pages:Array<number>
private currentKeyword:String;
   

  constructor( private ServiceServices:ServiceHopService, private activatedRoute:ActivatedRoute,private router:Router) {  }
  ngOnInit(): void {
  }
services;
  //Ajouter Service
  onSaveService(){ 
    debugger
   return this.ServiceServices.saveResource(this.currentService)
   .subscribe(res=>{
     this.currentService=res
     alert("donnes ajouter avec succes ")
     this.mode=2;
 
    },err=>{
        console.log(err);
      }) 
    
    
   }

  //Ajouter de nouveau service 
  onService(){ 
     this.mode=1;
    this.currentService= new ServiceHosp();
   }




   //Liste des Services 
 
     listService(){
    this.ServiceServices.listServices().subscribe(
      data => {
        this.services = data;
      },err=>{
        console.log(err);
     
      }
    )
  }
   
  //Supprimer Services
  onDelete(idService){
    debugger
     this.ServiceServices.delete(idService).subscribe(
        data => {
          debugger
       this.listService();
      //  alert("vous voulez supprimer  ")

        }
     )
    alert("la Suppression c'est fait avec succes  ")

  }
  

}
