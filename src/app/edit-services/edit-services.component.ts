import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceHosp } from '../model/serviceHosp';
import { ServicesHOPComponent } from '../services-hop/services-hop.component';
import { ServiceHopService } from '../Services/service-hop.service';

@Component({
  selector: 'app-edit-services',
  templateUrl: './edit-services.component.html',
  styleUrls: ['./edit-services.component.css']
})
export class EditServicesComponent implements OnInit {
  idservice

  constructor(private router:Router,
              private activatedRoute:ActivatedRoute,
              private serviceServices:ServiceHopService ) {
                
               }
              public currentService:ServiceHosp = new ServiceHosp() ;
              private url: string;
ngOnInit(): void {
  this.url=atob(this.activatedRoute.snapshot.params.id);
  
  this.serviceServices.getResource(this.url)
    .subscribe(data=>{
      this.currentService=data;
      this.idservice=data.idService
      console.log(this.idservice);
    },err=>{
      console.log(err);
    })
 }


  onUpdateService(value: any){ 
    console.log(this.idservice)   
    
    this.serviceServices.updateResource("http://localhost:8087/api/v1/updateService/"+this.idservice,value)
    .subscribe(data=>{
     alert("Mise a jour a effectuee avec succes")
    },err=>{
      console.log(err);
    })
  }


}
