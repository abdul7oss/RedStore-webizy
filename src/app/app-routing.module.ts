import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {MensComponent} from './mens/mens.component';
import {KidsComponent} from './kids/kids.component';
import {WomensComponent} from './womens/womens.component';
const routes: Routes = [
  {
  path:'',
  component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'product',
    component:ProductComponent
  }
  
  ,
  {
    path:'productdetail',
    component:ProductDetailComponent
  }
  ,
  {
    path:'mens',
    component:MensComponent
  }
  ,
  {
    path:'womens',
    component:WomensComponent
  }
  ,
  {
    path:'kids',
    component:KidsComponent
  }
  ,
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

