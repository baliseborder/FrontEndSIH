import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { CatalogueService } from '../Services/catalogue.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

//declarer une variable 
public produits:any;
public size:number=10;
public currentPage:number=0;
public totalPages:number;
public pages:Array<number>
private currentKeyword:String;


  //on veut injecter le httpClientModule
  constructor(private catService:CatalogueService, private router:Router){ }

  ngOnInit(): void {}
      
    onGetProduct(){
      this.catService.getProducts(this.currentPage,this.size)
      //subscribe c a d j attend si y de donnes arrive 
      .subscribe(data=>{
        this.produits=data;
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages)
      },err=>{
        console.log(err)
  
      })
         
      }

        
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


      chercherProduits(){
        this.catService.getProductsByKeyword(this.currentKeyword,this.currentPage,this.size)
        //subscribe c a d j attend si y de donnes arrive 
        .subscribe(data=>{
          this.produits=data;
          this.totalPages=data["page"].totalPages;
          this.pages=new Array<number>(this.totalPages)
        },err=>{
          console.log(err)
    
        })
    }

    onDeleteProduct(p){
      debugger
      let conf=confirm("Etes Vous Sure?");
      //je fait le test 
      if(conf){
        this.catService.deleteResource(p._links.self.href)
        .subscribe(data=>{
          this.chercherProduits();
        }, err=>{
          console.log(err);
        }
          )      }

    }


   onEditProduct(p){
     debugger
    let url=p._links.self.href;
    console.log(url);
   // this.router.navigateByUrl("/edit-product/"+p.id) 
   //on peut pas mettre dans url un parametre contient http, il faut donne une fonction base 64 de code pour faire on 
   //utilise une fonction btoa(url)
   this.router.navigateByUrl("/edit-product/"+btoa(url));
   }

}