import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../authentification-service.service';
import { Personnel } from '../model/personnel.model';


@Injectable({
  providedIn: 'root'
})

export class PersonnelService {

  public host:String="http://localhost:8087";
  public host1:String="http://localhost:8087/api/v1";
  public personnel:string = "personnel";
public listPersonne:string="listPersonne"
 auth: any;

  constructor( private httpClient:HttpClient,authen:AuthentificationService ) {
    this.auth=authen
   }
//liste des personne ls
  listPersonnes():Observable<object>{
    return this.httpClient.get(`${this.host1}/${this.listPersonne}`,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }


   public saveResource(personne):Observable<any>{
    debugger
    return this.httpClient.post(this.host1+"/AjoutPersonne",personne,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
    //return  this.httpClient.post(url,data);  saveResource
    

  }


  delete(idPersonne:number):Observable<Object>{
    return this.httpClient.delete(`${this.host1}/${this.personnel}/${idPersonne}`,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }


  //methode permet de lister nom de services 
  public getServicesNames(){
    return this.httpClient.get(this.host1+"/listServicesByName",{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
     }

  //UPDATE 
 updatePersonne(idPersonne,UpdatePersonne:Personnel):Observable<Object>{
    debugger
    return this.httpClient.put(`${this.host1}/${this.personnel}/${idPersonne}`,UpdatePersonne,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }
  public getResource(url):Observable<any>{
    console.log(url);
    return this.httpClient.get(url,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
   //return  this.httpClient.post(url,data);  saveResource
 }

  public updateResource(url,data):Observable<any>{
      return this.httpClient.put(url,data,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
    }
    

    

  
}
