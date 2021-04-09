import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospitalisation} from '../model/hospit.model';
import { HospitalisationService } from '../Services/hospitalisation.service';
@Component({
  selector: 'app-edit-hospitalisation',
  templateUrl: './edit-hospitalisation.component.html',
  styleUrls: ['./edit-hospitalisation.component.css']
})
export class EditHospitalisationComponent implements OnInit {
  public currentHospit:Hospitalisation;
  private url: string;
  constructor(private router:Router,
              private activatedRoute:ActivatedRoute,
              private hospitServices:HospitalisationService ) { }

  ngOnInit(){ 
    this.url=atob(this.activatedRoute.snapshot.params.id);    
    this.hospitServices.getResource(this.url)
    .subscribe(data=>{
      this.currentHospit=data;
      console.log(this.currentHospit);
    },err=>{
      console.log(err);
    })

  }
  //Update 
  onUpdateHospit(value: any){
   this.hospitServices.updateResource(this.url,value)
   .subscribe(data=>{
    alert("Mise a jour a effectuee avec succes")
   },err=>{
     console.log(err);
   })
 }

  }