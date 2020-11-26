import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../authentification-service.service';
import { Hospitalisation } from '../model/hospit.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalisationService {

  public host:String="http://localhost:8087/api/v1";
  public host1:String="http://localhost:8087"
  public hospitalisation:string = "hospitalisation";
  public listHosp:string ="listHospitalisation";
  
  auth;

  constructor(private httpClient:HttpClient,public authen:AuthentificationService ) {
    this.auth=authen;
  }

  updateHospitalisation(id,hospitalisation:Hospitalisation):Observable<Object>{
    debugger
    return this.httpClient.put(`${this.host}/${this.hospitalisation}/${id}`,hospitalisation,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }

  listHospitalisation():Observable<object>{
    return this.httpClient.get(`${this.host}/${this.listHosp}`,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }

  getHospitalisation(url):Observable<object>{
    debugger
      return this.httpClient.get(url)
  }

  delete(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.host}/${this.hospitalisation}/${id}`,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }


  /* public getHospByKeyword(mc:String, page:number,size:number){
    //produits/search/byDesignationPage?mc=H&page=0&size=3
    return this.httpClient.get(this.host+"/hospitalisations/search/byNomServicePage?mc="+mc+"&page="+page+"&size="+size);
  }*/
 


  public saveResource(data):Observable<any>{
    debugger
    return this.httpClient.post(this.host+"/hospitalisation",data ,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
    //alert("ok")
    //return  this.httpClient.post(url,data);  saveResource

  }


  
  public getPageHospitalisation(page:number,size:number){
    return this.httpClient.get(this.host+"/hospitalisations?page="+page+"&size="+size,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
    //hospitalisations?page="+page+"&size="+size
  }
   
}