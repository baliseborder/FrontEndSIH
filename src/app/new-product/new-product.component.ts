import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ProduitComponent } from '../produit/produit.component';
import { CatalogueService } from '../Services/catalogue.service';
import {Product} from '../model/product.model';


@Component({
  selector: 'app-new-product',
  templateUrl:'./new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
   currentProduct:Product;
   mode: number=1;


  constructor(private catService:CatalogueService, private router:Router) { }

  ngOnInit(): void { }
  
  
  onSaveProduct(data:any){
    this.catService.saveResource(this.catService.host+"/produits",data)
    .subscribe(res=>{
     // console.log(res);
    // this.router.navigateByUrl("/produit")
    this.currentProduct=res
    this.mode=2;

    },err=>{
      console.log(err);
    })
  }

  onNewProduct(){
    this.mode=1;
  }


}
