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
import { ListpathologieComponent } from './listpathologie/listpathologie.component';
import {PageLoginComponent}from './page-login/page-login.component'
import { EditHospitalisationComponent } from './edit-hospitalisation/edit-hospitalisation.component';
import { ServicesHOPComponent } from './services-hop/services-hop.component';

const routes: Routes = [
  {path:'login', component:PageLoginComponent},
   {path:'produit',component: ProduitComponent} ,
  {path:'new-product',component: NewProductComponent},
  //route par defaut 

  {path:'edit-product/:id',component:EditProductComponent},
  //chemin pour modifier hospitalisation par id
  {path:'hospitalisation/:id',component:HospitalisationComponent},
  {path:'hospitalisation',component:HospitalisationComponent},
  {path:'personnel',component:PersonnelComponent},
  {path:'pathologie',component:PathologieComponent},
  {path:'listHosp',component:ListHospitalisationComponent},
  {path:'listPersonne',component:ListPersonnelComponent},
  {path:'listPathologies',component:ListpathologieComponent},
  {path:'editHospi/:id',component:EditHospitalisationComponent},
  {path:'servicesHop',component:ServicesHOPComponent},
 
  {path:'MyChart',component:MychartComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
