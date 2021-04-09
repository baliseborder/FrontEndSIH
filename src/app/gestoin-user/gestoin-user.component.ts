import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {GestionusersService} from '../Services/gestionusers.service';
import { ModeUser} from '../model/ModeUser';

@Component({
  selector: 'app-gestoin-user',
  templateUrl: './gestoin-user.component.html',
  styleUrls: ['./gestoin-user.component.css']
})
export class GestoinUserComponent implements OnInit {
  mode=0;
  rolesNames:any;
  modeluser: ModeUser;

  message;


  constructor(public gestionservice:GestionusersService) { }

  ngOnInit(): void {
    this.modeluser=new ModeUser();
    this.getRolesNames();
  

  }
  getRolesNames(){
    this.gestionservice.RolesNames().subscribe(
      resp=>{
        this.rolesNames=resp;
     
        console.log(this.rolesNames)
   
  
      }
    )
  }
  onSaveGestionUser(){
    console.log(this.modeluser)

    this.gestionservice.AjouterUser(this.modeluser).subscribe(
      resp=>{
        if(resp!=undefined){
          this.mode=1;
          this.message="Ajout avec success"
        }
      }
    );
    this.modeluser=new ModeUser();

  }


}
