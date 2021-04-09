import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';



@Injectable()
export  class AuthentificationService {
  public jwtToken = null;
  public username;
  public isrespo=false;

  private host: string = "http://localhost:8087";
   public myroles: Array<any>;

  constructor(private  http: HttpClient) {}

  login(user) {
    return this.http.post(this.host + "/login", user, {observe: 'response'});
  }


  loadTokn() {
    this.jwtToken = localStorage.getItem('token');
  }
  saveToken(jwt) {
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    let jwtHelperService=new JwtHelperService();
    let objectHelper=jwtHelperService.decodeToken(this.jwtToken);
    this.username=objectHelper.sub;
    console.log(this.username);
    this.myroles=objectHelper.roles;
  }

  logout() {
    this.jwtToken=null;
    localStorage.removeItem('token')
    this.myroles=undefined

  }
  isAuthentifier(){
    if(this.myroles!=undefined)return true;
    return false;


  }
  isIntervenant(){

    if(this.myroles!=undefined){
      for (let  role of this.myroles){
        if (role.authority=='INTERVENANT') return true;
      }
    }
  }

  isAdmin(){
    if(this.myroles!=undefined) {
      for (let role of this.myroles) {
        if (role.authority == 'ADMIN') return true;
      }
    }
  return  false;

  }
  isUser(){
    if(this.myroles!=undefined) {
      for (let role of this.myroles) {
        if (role.authority == 'USER') {
          this.isrespo=true;

          return true;}

      }
    }
    return  false;

  }
  isSimpleUser() {
    if (this.myroles != undefined) {
      for (let role of this.myroles) {
        if (role.authority == 'S-USER') return true;
      }
    }
    return false;
  }
 

}
