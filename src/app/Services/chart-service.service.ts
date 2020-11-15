import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class StatHopitalisation {
  label: string;
  nbr: number;
} 

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {
  static getNbGuerris(Date: DateConstructor): number | number[] | import("chart.js").ChartPoint {
    throw new Error('Method not implemented.');
  }

  public host:String="http://localhost:8087/api/v1";
  public nbguerris:string ="ngGuerris";
  public nbdeces:string ="ngDeces";
 public nbconsult:string="ngConsult";
 public nbReferes:string="ngReferer";
 public statHospitalisation = "getStatHospitalisation"
  constructor( private httpClient:HttpClient) { 
    
  }

  getNbGuerris(date){
    return this.httpClient.get(`${this.host}/${this.nbguerris}/${date}`);
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

}
