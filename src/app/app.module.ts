import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { FormsModule, NgForm } from '@angular/forms';
import { NewProductComponent } from './new-product/new-product.component';
import { from } from 'rxjs';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HospitalisationComponent } from './hospitalisation/hospitalisation.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { PathologieComponent } from './pathologie/pathologie.component';
import { ListHospitalisationComponent } from './list-hospitalisation/list-hospitalisation.component';
import { ListPersonnelComponent } from './list-personnel/list-personnel.component';
import { ChartsModule } from 'ng2-charts';
import { MychartComponent } from './mychart/mychart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ListpathologieComponent } from './listpathologie/listpathologie.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { AuthentificationService } from './authentification-service.service';
import { EditHospitalisationComponent } from './edit-hospitalisation/edit-hospitalisation.component';
import { ServicesHOPComponent } from './services-hop/services-hop.component';


//import { Hospitalisation } from './model/hospit.model';
//import {NgForm} from '@angular/forms';

@NgModule({  
  declarations: [
    AppComponent,
    ProduitComponent,
    NewProductComponent,
    EditProductComponent,
    HospitalisationComponent,
    PersonnelComponent,
    PathologieComponent,
    ListHospitalisationComponent,
    ListPersonnelComponent,
    MychartComponent,
    ListpathologieComponent,
    PageLoginComponent,
    EditHospitalisationComponent,
    ServicesHOPComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //NgApexchartsModule,
    ChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
