import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../authentification-service.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceHopService {
  public host:String="http://localhost:8087/api/v1";

auth;
  constructor(private httpClient:HttpClient,public authen:AuthentificationService ) {
    this.auth=authen;} 
  

    
  public saveResource(data):Observable<any>{
    debugger
    return this.httpClient.post(this.host+"/AjouterService",data ,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});


  }
    
  
  }