import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../authentification-service.service';
import { Pathologie } from '../model/pathologie.model';

@Injectable({
  providedIn: 'root'
})
export class PathologieService {
  public host:String="http://localhost:8087";
  public host1:String="http://localhost:8087/api/v1";
  public listPath:string ="listPathologie";
  public supprimerPath:string= "supprimerPathologie";
  public pathologie:string = "pathologie";


  auth: any;
  constructor( private httpClient:HttpClient,authen:AuthentificationService ) {
    this.auth=authen
   }
//=========================================================================
//methode lister les Pathologies 
listPathologiess():Observable<object>{
    return this.httpClient.get(`${this.host1}/${this.listPath}`,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }
//==========================================================================   
  public saveResource(pa):Observable<any>{
    //debugger
    return this.httpClient.post(this.host1+"/savePathologie",pa,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
      }
//==========================================================================
//==========================================================================
  //methode permet de lister nom de services 
  public getServicesNames(){
    return this.httpClient.get(this.host1+"/listServicesByName",{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
     }
//==========================================================================
//========================Suppression======================

delete(idPath:number):Observable<Object>{
    return this.httpClient.delete(`${this.host1}/${this.supprimerPath}/${idPath}`,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }
//==============================================================================
//============================ Update  =========================================
updatePathologie(idPath,UpdatePathologie:Pathologie):Observable<Object>{
    debugger
    return this.httpClient.put(`${this.host1}/${this.pathologie}/${idPath}`,UpdatePathologie,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
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
