import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../authentification-service.service';

export class StatHopitalisation {
  label: string;
  nbr: number;
} 

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService implements OnInit{
  static getNbGuerris(Date: DateConstructor): number | number[] | import("chart.js").ChartPoint {
    throw new Error('Method not implemented.');
  }

  public host:String="http://localhost:8087/api/v1";
  public nbguerris:string ="ngGuerris";
  public nbdeces:string ="ngDeces";
 public nbconsult:string="ngConsult";
 public nbReferes:string="ngReferer";
 public statHospitalisation = "getStatHospitalisationDate";
 auth;
  constructor( private httpClient:HttpClient,public authen:AuthentificationService) { 
    this.auth=authen;
  }
  ngOnInit(): void {
 
  }




  getNbGuerris(dateDebutHosp){
    return this.httpClient.get(`${this.host}/${this.nbguerris}/${dateDebutHosp}`);
  }


  getNbDeces(date):Observable<number>{
    return this.httpClient.get<number>(`${this.host}/${this.nbdeces}/${date}`)
  }

  getNbConsultation(date){
    return this.httpClient.get(`${this.host}/${this.nbconsult}/${date}`)
  }
  
    getReferes(date){
    return this.httpClient.get(`${this.host}/${this.nbReferes}/${date}`)
  }

  

  getStatHospitalisation(date){
    return this.httpClient.get<StatHopitalisation []>(`${this.host}/${this.statHospitalisation}/${date}`)
  }
  getStatHospitalisationdate(){
    return this.httpClient.get<StatHopitalisation []>(`${this.host}/${this.statHospitalisation}`,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })})
  }
  getServicesNames(){
    return this.httpClient.get(`${this.host}`+'/listServicesByName',{headers: new HttpHeaders({'authorization': this.auth.jwtToken })})
  


  }
  getServicesNamesTauxLit(nom:string){
    return this.httpClient.get(`${this.host}`+'/tauxlit'+'/'+nom,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })})
  


  }


}
