import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../authentification-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  constructor(private  authService:AuthentificationService, private  route:Router) { }

  ngOnInit(): void {
  }


  onAuthentifier(user){
    

    this.authService.login(user)
      .subscribe(
        resp=>{
          let jwtToken=resp.headers.get('Authorization');
          console.log(jwtToken)
          this.authService.saveToken(jwtToken);
          if(this.authService.isAdmin()) return this.route.navigateByUrl('/MyChart')

          else{
            return  this.route.navigateByUrl('/login')
          }



        },
        error => {
         


        }
      );

}}
