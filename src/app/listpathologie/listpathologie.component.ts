import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { PathologieService } from '../Services/pathologie.service';
import{Pathologie} from '../model/pathologie.model';



@Component({
  selector: 'app-listpathologie',
  templateUrl: './listpathologie.component.html',
  styleUrls: ['./listpathologie.component.css']
})
export class ListpathologieComponent implements OnInit {
  pathologies;
  constructor(private pathologieService: PathologieService, private  router: Router) { }
   ngOnInit(): void { }
  listPathologies(){
    debugger
    this.pathologieService.listPathologies().subscribe(
      data => {
        alert("test1 ")
        this.pathologies = data;
      },err=>{
        console.log(err);
    
      }
    )
  }  
}