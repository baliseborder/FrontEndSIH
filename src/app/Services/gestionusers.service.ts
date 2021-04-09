import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthentificationService } from '../authentification-service.service';

@Injectable({
  providedIn: 'root'
})
export class GestionusersService {
  public host:string="http://localhost:8087";

  constructor(private httpClient:HttpClient,public authen:AuthentificationService) { }

  RolesNames(){
    return this.httpClient.get(this.host+"/RolesNames",{headers: new HttpHeaders({'authorization': this.authen.jwtToken })});
  
  }

  AjouterUser(user){
    return this.httpClient.post(this.host+"/ajouterUser",user,{headers: new HttpHeaders({'authorization': this.authen.jwtToken })});
  
  }
}
