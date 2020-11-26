import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthentificationService } from './authentification-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  services:any=[];


 constructor(private httpClient:HttpClient,public auth:AuthentificationService,private routeur:Router){

 }
  ngOnInit(): void {
    this.VerifierAuthention();
       debugger
   this.httpClient.get("assets/hospservice.json").subscribe(
      data => {
        this.services = data;
      }
  )
  }
  logout() {
    this.auth.jwtToken=null;
    localStorage.removeItem('token')
    this.auth.myroles=undefined;
    this.routeur.navigateByUrl("/login")


  }
  VerifierAuthention(){
    if(localStorage.getItem('token')==undefined){
      return this.routeur.navigateByUrl("/login");
    }
    else{
      this.auth.jwtToken=localStorage.getItem('token');
      let jwtHelperService=new JwtHelperService();
      let objectHelper=jwtHelperService.decodeToken(this.auth.jwtToken);
      this.auth.username=objectHelper.sub;
      this.auth.myroles=objectHelper.roles;
      if(this.auth.isAdmin()==true){
        return this.routeur.navigateByUrl("/MyChart")
      }
     
    }



  }


 
}
