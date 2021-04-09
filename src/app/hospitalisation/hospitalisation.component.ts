import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{HospitalisationService} from'../Services/hospitalisation.service';
import { Hospitalisation} from '../model/hospit.model';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-hospitalisation',
  templateUrl: './hospitalisation.component.html',
  styleUrls: ['./hospitalisation.component.css']
})
export class HospitalisationComponent implements OnInit {
  public currentHospit:Hospitalisation = new Hospitalisation() ;
  serviceNames;
  servicesNames=[];
 /* public size:number=5;
public currentPage:number=0;
public totalPages:number;
public pages:Array<number>*/
//private currentKeyword:String;
 // isHidden: boolean=true; 
  mode: number=1;
  private url: string;
  
  serviceHospitalisation:any;
 
  constructor(private hospitServices:HospitalisationService, 
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    debugger
    this.getServicesNames(); 
     }
  onSaveHospitalisation(){
   debugger
   return this.hospitServices.saveResource(this.currentHospit)
   .subscribe(res=>{
    debugger
     this.currentHospit=res
     alert("donnes ajouter avec succes ")
     this.mode=2;
 
    },err=>{
        console.log(err);
      })  
      
    }
    onNewHospitalisation(){
      this.mode=1;
      this.currentHospit= new Hospitalisation();


    }
    getServicesNames(){
      this.hospitServices.getServicesNames().subscribe(
        resp=>{
          this.serviceNames=resp;
          this.servicesNames=this.serviceNames;
          console.log(this.servicesNames)


        }

      )
    }   
 }