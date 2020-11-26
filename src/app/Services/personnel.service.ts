import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../authentification-service.service';


@Injectable({
  providedIn: 'root'
})

export class PersonnelService {

  public host:String="http://localhost:8087";
  public personnel:string = "personnel";
public listPersonne:string="listPersonne"
 auth: any;

  constructor( private httpClient:HttpClient,authen:AuthentificationService ) {
    this.auth=authen
   }
//liste des personne ls
  listPersonnes():Observable<object>{
    return this.httpClient.get(`${this.host}/${this.listPersonne}`,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }


   public saveResource(data):Observable<any>{
    debugger
    return this.httpClient.post(this.host+"/personnes",data,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
    //return  this.httpClient.post(url,data);  saveResource
    

  }


  delete(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.host}/${this.personnel}/${id}`,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }
}
