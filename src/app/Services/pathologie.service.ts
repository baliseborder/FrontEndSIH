import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PathologieService {
  public host:String="http://localhost:8087";
  public host1:String="http://localhost:8087/api/v1";
  public listPath:string ="listPathologies";
 


  constructor(private httpClient:HttpClient) { }
  public saveResource(data):Observable<any>{
    //debugger
    return this.httpClient.post(this.host1+"/SavePathologies",data);
  }




  listPathologies():Observable<object>{
    return this.httpClient.get(`${this.host1}/${this.listPath}`);
  }
  

  
}
