import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ProduitComponent} from './produit/produit.component';
import{NewProductComponent} from './new-product/new-product.component';
import { from } from 'rxjs';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HospitalisationComponent } from './hospitalisation/hospitalisation.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { PathologieComponent } from './pathologie/pathologie.component';
import { ListHospitalisationComponent } from './list-hospitalisation/list-hospitalisation.component';
import { ListPersonnelComponent } from './list-personnel/list-personnel.component';
import { MychartComponent } from './mychart/mychart.component';

const routes: Routes = [
   {path:'produit',component: ProduitComponent} ,
  {path:'new-product',component: NewProductComponent},
  //route par defaut 
  {path:"",redirectTo:"/Produits",pathMatch:'full'},
  {path:'edit-product/:id',component:EditProductComponent},
  //chemin pour modifier hospitalisation par id
  {path:'hospitalisation/:id',component:HospitalisationComponent},
  {path:'hospitalisation',component:HospitalisationComponent},
  {path:'personnel',component:PersonnelComponent},
  {path:'pathologie',component:PathologieComponent},
  {path:'listHosp',component:ListHospitalisationComponent},
  {path:'listPersonne',component:ListPersonnelComponent},
  {path:'MyChart',component:MychartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
