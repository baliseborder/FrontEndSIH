import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../authentification-service.service';
import { ServiceHosp } from '../model/serviceHosp';

@Injectable({
  providedIn: 'root'
})
export class ServiceHopService {
  public host1:String="http://localhost:8087";
  public host:String="http://localhost:8087/api/v1";
  public AjouterService:string = "AjouterService";
  public SupprimerService:string= "SupprimerService";
  public listService:string ="listServices";
  public updateService:string ="updateService";


auth;
  constructor(private httpClient:HttpClient,public authen:AuthentificationService ) {
    this.auth=authen;} 
  
//methode lister les Service
listServices():Observable<object>{
    return this.httpClient.get(`${this.host}/${this.listService}`,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }


//methode Ajouter service    
  public saveResource(data):Observable<any>{
    debugger
    return this.httpClient.post(this.host+"/AjouterService",data ,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }

//Methode Supprimer  Service
 delete(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.host}/${this.SupprimerService}/${id}`,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }

//identifier d'abord url
  public getResource(url):Observable<any>{
    console.log(url);
    return this.httpClient.get(url,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
    //return  this.httpClient.post(url,data);  saveResource
  }
    //Methode    Update Service

 /*updateServices(idService,service:UpdateService):Observable<Object>{
    debugger
    return this.httpClient.put(`${this.host}/${this.updateService}/${idService}`,service,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }*/
    
  public updateResource(url,servicedetail):Observable<any>{   
    return this.httpClient.put(url,servicedetail,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
    //return  this.httpClient.post(url,data);  saveResource
  }
     getService(url):Observable<object>{
    debugger
      return this.httpClient.get(url)
  }
//Pagination 
  public getProductsByKeyword(mc:String, page:number,size:number){
      return this.httpClient.get(this.host1+"/services/search/byPeageNomService?mc="+mc+"&page="+page+"&size="+size,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }

  public getProducts(page:number,size:number){
    return this.httpClient.get(this.host1+"/services?page="+page+"&size="+size,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }

  
  }