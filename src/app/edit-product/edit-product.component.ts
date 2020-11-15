import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { Product } from '../model/product.model';
import{CatalogueService} from '../Services/catalogue.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public currentProduct:Product;
  private url: string;
//injecter la route (router:Router) et la route actuelle (activatedRoute:ActivatedRoute)
  constructor( private router:Router, private activatedRoute:ActivatedRoute,private catService:CatalogueService) { }

  ngOnInit() {
    debugger
    this.url=atob(this.activatedRoute.snapshot.params.id);
    this.catService.getResource(this.url)
    .subscribe(data=>{
      this.currentProduct=data;
    },err=>{
      console.log(err);
    })
  }

  onUpdateProduct(value: any){
    this.catService.updateResource(this.url,value)
    .subscribe(data=>{
     alert("Mise a jour a effectuee avec succes")
    },err=>{
      console.log(err);
    })
  }

}
/*=====================Message Error========================
Access to XMLHttpRequest at 'http://localhost:8087/produits/84' 
from origin 'http://localhost:4200'
 has been blocked by CORS policy:
  Response to preflight request doesn't pass access control check:
   No 'Access-Control-Allow-Origin'
 header is present on the requested resource.
*/
