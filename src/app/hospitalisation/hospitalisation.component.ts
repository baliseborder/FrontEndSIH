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
 
   // this.url=atob(this.activatedRoute.snapshot.params.id);
   // if(this.url != undefined){
     /* this.hospitServices.getHospitalisation(this.url).subscribe(
        data =>{
        // this.currentHospit = data;
       /*  if(this.currentHospit != undefined){
         // this.isHidden = false;
         }*/
       /* }
      )**/
   // }
 

  }
/* public getProductsByKeyword(mc:String, page:number,size:number){
    //produits/search/byDesignationPage?mc=H&page=0&size=3
    return this.httpClient.get(this.host+"/hospitalisations/search/byDesignationPage?mc="+mc+"&page="+page+"&size="+size);
  }*/

  onSaveHospitalisation(){
   debugger
   return this.hospitServices.saveResource(this.currentHospit)
   .subscribe(res=>{
     this.currentHospit=res
     alert("donnes ajouter avec succes ")
     this.mode=2;
 
    },err=>{
        console.log(err);
      })  
    }
    onNewHospitalisation(){
      this.mode=1;
      this.currentHospit

    }
  
   /*
   if(this.currentHospit.idHosp == null ){
      alert("Add");
   }else{
    // alert("Vous voulez mettre a jours cet objet !")
      this.hospitServices.updateHospitalisation(this.currentHospit.idHosp,this.currentHospit).subscribe(
          data =>{

          }
      ) 
      alert("la modification ce fait avec succes id L'Objet est  "+this.currentHospit.idHosp)
  
    }
  */

 
 }