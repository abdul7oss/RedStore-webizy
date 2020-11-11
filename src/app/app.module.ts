import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MensComponent } from './mens/mens.component';
import { KidsComponent } from './kids/kids.component';
import { WomensComponent } from './womens/womens.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    MensComponent,
    KidsComponent,
    WomensComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
