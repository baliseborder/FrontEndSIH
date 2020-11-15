import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalisationService } from 'src/app/Services/hospitalisation.service';
import {ChartServiceService} from 'src/app/Services/chart-service.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Hospitalisation} from '../model/hospit.model';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-list-hospitalisation',
  templateUrl: './list-hospitalisation.component.html',
  styleUrls: ['./list-hospitalisation.component.css']
})
export class ListHospitalisationComponent implements OnInit {
hospitalisations;
public currentHospit:Hospitalisation = new Hospitalisation() ;

i;
public size:number=5;
public currentPage:number=0;
//public nbguerris: [];
nbGuerris;
date: Date;
public totalPages:number;
public pages:Array<number>
//private currentKeyword:string;
  constructor(private hospitalisationService:HospitalisationService,
              private chartServiceService: ChartServiceService,
             private router:Router) { }
  
  ngOnInit(): void {
    debugger
    this.listhospitalisation();
    this.chartServiceService.getNbGuerris(this.date).subscribe(
      data => {
        debugger
        this.nbGuerris = data;

      },err=>{
        console.log(err);
     
      }
    )
  }

  listhospitalisation(){
    this.hospitalisationService.listHospitalisation().subscribe(
      data => {
        this.hospitalisations = data;
      },err=>{
        console.log(err);
     
      }
    )
  }

  onDelete(idHosp){
    debugger
     this.hospitalisationService.delete(idHosp).subscribe(
        data => {
          this.listhospitalisation();
        }
     )
     alert("la Suppression c'est fait avec succes  ")

  }
  onUpdate(id){
    debugger
    let url = "http://localhost:8087/api/v1/hospitalisation/"+id;
    this.router.navigateByUrl("/hospitalisation/"+btoa(url));
  }

  /*chercherHospitalisation(){
    this.hospitalisationService.getHospByKeyword(this.currentKeyword,this.currentPage,this.size)
    //subscribe c a d j attend si y de donnes arrive 
    .subscribe(data=>{
      this.hospitalisations=data;
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages)
    },err=>{
      console.log(err)

    })
  }*/


/* onPageHospitalisation(i){

  this.currentPage=i;
  this.onGetHospitalisation();
  this.chercherHospitalisation();
  }*/

  onGetHospitalisation(){
      this.hospitalisationService.getHopitalisation1(this.currentPage,this.size)
      //subscribe c a d j attend si y de donnes arrive 
      .subscribe(data=>{
        debugger
        this.hospitalisations=data;
      // this.totalPages=data["page"].totalPages;
      // this.pages=new Array<number>(this.totalPages)
      },err=>{
        console.log(err)
  
      })
         
      }

    /*  onCherche(form: any){
          this.currentPage=0;
       this.currentKeyword=form.keyword;
       this.chercherHospitalisation();
       this.currentPage=0;
       

      }*/

//public nbguerris: [];
getNbGuerris;

      lineChartData: ChartDataSets[] = [
  // { data: [this.chartServiceService.getNbGuerris(Date)], label: 'NOMBRE GUERRIS' },
      { data: [11, 11, 11,78, 108, 77, 75,85, 72, 11, 11, 11], label: 'NOMBRE Ref' },
        { data: [85, 72, 78, 108, 77, 75,85, 72, 78, 75, 77, 75], label: 'NOMBRE GUERRIS' },
        { data: [85, 72, 78, 75, 77, 75,78, 108, 77, 75,85, 72], label: 'NOMBRE Deces' },
        { data: [171, 155, 66, 161, 100, 161,152,111,178,125,158], label: 'NOMBRE Hosp' },


      ];
    
      lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June','January', 'February', 'March', 'April', 'May', 'June'];
    
      lineChartOptions = {
        responsive: true,
      };
    
      lineChartColors: Color[] = [
        {
          borderColor: 'black',
          backgroundColor: 'rgba(255,255,0,0.28)',
        },
      ];
    
      lineChartLegend = true;
      lineChartPlugins = [];
      lineChartType = 'line';
  /*  
      onChercher(form: any){
       this.currentPage=0;
       this.currentKeyword=form.keyword;
       this.chercherHospitalisation();
    }
      chercherHospitalisation(){
        this.catService.getProductsByKeyword(this.currentKeyword,this.currentPage,this.size)
        //subscribe c a d j attend si y de donnes arrive 
        .subscribe(data=>{
          this.produits=data;
          this.totalPages=data["page"].totalPages;
          this.pages=new Array<number>(this.totalPages)
        },err=>{
          console.log(err)
    
        })
      }*/

      /*
      
      
         
      onPageProduct(i){
        this.currentPage=i;
        //this.onGetProduct();
      this.chercherProduits();
    }
      onChercher(form: any){
       this.currentPage=0;
       this.currentKeyword=form.keyword;
       this.chercherProduits();
    }
      
      */



   /*  onGetHospitalisation(){
      this.hospitalisationService.getPageHospitalisation(this.currentPage,this.size).subscribe(data=>{
        this.hospitalisations=data;
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages)
      },err=>{
        console.log(err)
      })
    }
  */
    

}
