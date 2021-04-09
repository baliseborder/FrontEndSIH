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
  ////retourn liste des  annees 
  tousDate(){
    return this.httpClient.get(this.host+"/tousDate",{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
   }
     
//retourn liste des mois d une annes   
  DatesAnnes(annees){
    return this.httpClient.get(`${this.host}/AnnesMois/${annees}`,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
    }
    public HospServiceConsultations(nom){
      return this.httpClient.get(this.host+"/HospServiceConsultations/"+nom,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
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
  public diagrammeNbreGerires(choisAnnes){
    return this.httpClient.get(this.host+"/diagrammeNbreGerires/"+choisAnnes,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
  }

public diagrammeNbreDeces(choisAnnesDecces){
  return this.httpClient.get(this.host+"/diagrammeNbreDeces/"+choisAnnesDecces,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
 
}

public diagrammeNbreConsult(choisAnnesConsult){
  return this.httpClient.get(this.host+"/diagrammeNbreConsult/"+choisAnnesConsult,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});
 }
 public diagrammeNbreReferer(choisAnnesReferer){
   return this.httpClient.get(this.host+"/diagrammeNbreReferer/"+choisAnnesReferer,{headers: new HttpHeaders({'authorization': this.auth.jwtToken })});

 }

}
