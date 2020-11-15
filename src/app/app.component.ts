import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ServiceHosp} from './model/serviceHosp'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  services:any=[];


 constructor(private httpClient:HttpClient){

 }
  ngOnInit(): void {
       debugger
   this.httpClient.get("assets/hospservice.json").subscribe(
      data => {
        this.services = data;
      }
  )
  }
 
}
