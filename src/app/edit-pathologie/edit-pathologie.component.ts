import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pathologie } from '../model/pathologie.model';
import { PathologieService } from '../Services/pathologie.service';

@Component({
  selector: 'app-edit-pathologie',
  templateUrl: './edit-pathologie.component.html',
  styleUrls: ['./edit-pathologie.component.css']
})
export class EditPathologieComponent implements OnInit {
  private url: string;
  private idpathologie: string; 
  public currentPathologie: Pathologie = new Pathologie()
  constructor(private pathologieService: PathologieService,private activatedRoute:ActivatedRoute, private  router: Router ) { }
  ngOnInit(): void {     
   this.url=atob(this.activatedRoute.snapshot.params.id);    
    this.pathologieService.getResource(this.url)
    .subscribe(data=>{
      this.currentPathologie=data;
      console.log(this.currentPathologie);
    },err=>{
      console.log(err);
    }) 
  }

  onUpdatePathologie(value: any){  
    console.log(this.idpathologie) 
  this.pathologieService.updateResource("http://localhost:8087/api/v1/UpdatePathologie/"+this.idpathologie,value)
    .subscribe(data=>{
     alert("Mise a jour a effectuee avec succes")     
    },err=>{
      console.log(err);
    })
  
  }

}
