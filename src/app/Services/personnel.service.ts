import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersonnelService {

  public host:String="http://localhost:8087";
  public personnel:string = "personnel";
public listPersonne:string="listPersonne"

  constructor( private httpClient:HttpClient ) { }
//liste des personne ls
  listPersonnes():Observable<object>{
    return this.httpClient.get(`${this.host}/${this.listPersonne}`);
  }


   public saveResource(data):Observable<any>{
    debugger
    return this.httpClient.post(this.host+"/personnes",data);
    //return  this.httpClient.post(url,data);  saveResource

  }


  delete(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.host}/${this.personnel}/${id}`);
  }
}
