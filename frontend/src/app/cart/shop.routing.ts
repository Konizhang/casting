import { ProductlistComponent } from './component/productlist.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CartEntryComponent } from './cart-entry.component';
import { AuthGuard } from '../service/auth.guard';
import { ProductComponent } from './component/product.component';



const shopRoutes: Routes = [
  {
    path: 'shop', component: CartEntryComponent,
    children: [
      { path: 'list', component: ProductlistComponent } ,
      { path: 'product/:id', component: ProductComponent } ,
    ]
  }


];
 
@NgModule({
  imports: [RouterModule.forChild(shopRoutes)],
  exports: [RouterModule],
    providers: [
    AuthGuard 
    ]
  })
  export class ShopRoutingModule {}
  
