import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceHosp } from '../model/serviceHosp';
import {ServiceHopService} from '../Services/service-hop.service';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  constructor(private ServiceServices:ServiceHopService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }
  ngOnInit(): void {
             
                this.onPageServices
                this.onChercher
                this.onGetProduct    
                this.listService()    
               }
//Declar
services;
public produits:any;
public size:number=5;
public currentPage:number=0;
public totalPages:number;
public pages:Array<number>
private currentKeyword:String;
public currentService:ServiceHosp = new ServiceHosp() ;
//Methode permet de Listent les services
onChercher(form: any){
  this.currentPage=0;
 this.currentKeyword=form.keyword;
 this.chercherServices();
 this.listService();
}
listService(){
        this.ServiceServices.listServices().subscribe(
        data => {
          this.services = data;
        },err=>{
          console.log(err);
       
        }
      )
    }


//Methode Supprimer 
onDelete(idService){
  debugger
   this.ServiceServices.delete(idService).subscribe(
      data => {
        debugger
     this.listService();
    //  alert("vous voulez supprimer  ")

      }
   )
  alert("la Suppression c'est fait avec succes  ")

}
//edite
/* onUpdate(id){
   debugger
    let url1 = "http://localhost:8087/api/v1/updateService/"+id;
    this.router.navigateByUrl("/updateService/"+btoa(url1));
  } */
  
  //onEditService(s)
  onEditService(s){    
    debugger
    let url2="http://localhost:8087/api/v1/updatService/"+s.idService;
      console.log(url2);
      this.router.navigateByUrl("/editService/"+btoa(url2))
  }
  //Methode Pagination 
 //pagination ===================================================================     
 onGetProduct(){
  this.ServiceServices.getProducts(this.currentPage,this.size)
  //subscribe c a d j attend si y de donnes arrive 
  .subscribe(data=>{
    console.log(error)
    this.services=data;
    this.totalPages=data["page"].totalPages;
    this.pages=new Array<number>(this.totalPages)
  },err=>{
    console.log(err)  
  })         
  }

onPageServices(i){
    this.currentPage=i;
    this.onGetProduct();
  this.chercherServices();
}


 chercherServices(){
                      this.ServiceServices.getProductsByKeyword(this.currentKeyword,this.currentPage,this.size)
                      //subscribe c a d j attend si y de donnes arrive 
                      .subscribe(data=>{
                        this.produits=data;
                        this.totalPages=data["page"].totalPages;
                        this.pages=new Array<number>(this.totalPages)
                      },err=>{
                        console.log(err)    
                      })
                   }

//==========================Fin Pagination============


}
