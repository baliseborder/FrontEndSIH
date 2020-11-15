import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

public host:string="http://localhost:8087";

  constructor(private httpClient:HttpClient) { }

  public getProducts(page:number,size:number){
    return this.httpClient.get(this.host+"/produits?page="+page+"&size="+size);
  }


  public getProductsByKeyword(mc:String, page:number,size:number){
    //produits/search/byDesignationPage?mc=H&page=0&size=3
    return this.httpClient.get(this.host+"/produits/search/byDesignationPage?mc="+mc+"&page="+page+"&size="+size);
  }

  public deleteResource(url):Observable<any>{
    debugger
   return  this.httpClient.delete(url);
  }


  public saveResource(url,data):Observable<any>{
    return this.httpClient.post(url,data);
    //return  this.httpClient.post(url,data);  saveResource
  } 




  public getResource(url):Observable<any>{
    return this.httpClient.get(url);
    //return  this.httpClient.post(url,data);  saveResource
  }


  public updateResource(url,data):Observable<any>{
    return this.httpClient.put(url,data);
    //return  this.httpClient.post(url,data);  saveResource
  }


}
