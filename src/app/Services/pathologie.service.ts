import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PathologieService {
  public host:String="http://localhost:8087";

  constructor(private httpClient:HttpClient) { }
  public saveResource(data):Observable<any>{
    //debugger
    return this.httpClient.post(this.host+"/pathologies",data);
  }
}
