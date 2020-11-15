import { Component, OnInit } from '@angular/core';
/*import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {MatExpansionModule} from '@angular/material/expansion';*/
import {PathologieService} from'../Services/pathologie.service';
import { Pathologie} from '../model/pathologie.model';


@Component({
  selector: 'app-pathologie',
  templateUrl: './pathologie.component.html',
  styleUrls: ['./pathologie.component.css'],
})
export class PathologieComponent implements OnInit {
 
currentPathologie: Pathologie = new Pathologie()
public mode:number=1;

  constructor(private pathologieService:PathologieService ) { 


  }

  ngOnInit(): void {
  }
    onSavePathologie(){
   debugger
    this.pathologieService.saveResource(this.currentPathologie)
   .subscribe(res=>{
  //console.log(res);
//this.router.navigateByUrl("/hospitalisations")
   this.currentPathologie=res
   this.mode=2;

  },err=>{
      console.log(err);
    })
  }


  onNewPathologie(){
    this.mode=1;
  }
  

}

