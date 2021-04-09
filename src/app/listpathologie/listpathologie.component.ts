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
 public  pathologiess;
  constructor(private pathologieService: PathologieService, private  router: Router) { }
   ngOnInit(): void {  this.listPathologies(); }
//=====================================================================
//Methode permet de Listent les Pathologies 
listPathologies(){
     this.pathologieService.listPathologiess().subscribe(
      res => {
        this.pathologiess = res;
        console.log(this.pathologiess) 
               },err=>{
        console.log(err);    
      }
    )
  }  
//=====================================Fin Liste ========================
//=====================================Debut Methode Suppression ========
onDelete(idPath){
    debugger
     this.pathologieService.delete(idPath).subscribe(
        data => {
          debugger
       this.listPathologies();
      //  alert("vous voulez supprimer  ")

        }
     )
    alert("la Suppression c'est fait avec succes  ")

  }

  //onEditPathologie(path)
  onEditPathologie(path){    
    debugger
    let url2="http://localhost:8087/api/v1/updatPathologie/"+path.idPath;
      console.log(url2);
    this.router.navigateByUrl("/editPathologie/"+btoa(url2))
  }
  }


