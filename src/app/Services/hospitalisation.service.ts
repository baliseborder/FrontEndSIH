import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospitalisation } from '../model/hospit.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalisationService {
  public host:String="http://localhost:8087/api/v1";
  public host1:String="http://localhost:8087"
  public hospitalisation:string = "hospitalisation";
  public listHosp:string ="listHospitalisation";
  
  constructor(private httpClient:HttpClient) {}

  updateHospitalisation(id,hospitalisation:Hospitalisation):Observable<Object>{
    debugger
    return this.httpClient.put(`${this.host}/${this.hospitalisation}/${id}`,hospitalisation);
  }

  listHospitalisation():Observable<object>{
    return this.httpClient.get(`${this.host}/${this.listHosp}`);
  }

  getHospitalisation(url):Observable<object>{
    debugger
      return this.httpClient.get(url)
  }

  delete(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.host}/${this.hospitalisation}/${id}`);
  }
 public getHopitalisation1(page:number,size:number){
    return this.httpClient.get(this.host1+"/hospitalisations?page="+page+"&size="+size);
  }


  /* public getHospByKeyword(mc:String, page:number,size:number){
    //produits/search/byDesignationPage?mc=H&page=0&size=3
    return this.httpClient.get(this.host+"/hospitalisations/search/byNomServicePage?mc="+mc+"&page="+page+"&size="+size);
  }*/
 


  public saveResource(data):Observable<any>{
    debugger
    return this.httpClient.post(this.host+"/hospitalisation",data);
    //alert("ok")
    //return  this.httpClient.post(url,data);  saveResource

  }


  
  public getPageHospitalisation(page:number,size:number){
    return this.httpClient.get(this.host+"/hospitalisations?page="+page+"&size="+size);
    //hospitalisations?page="+page+"&size="+size
  }
   
}
