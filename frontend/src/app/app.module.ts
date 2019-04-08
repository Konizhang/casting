import { AuthService } from './service/auth.service';

import { AppRoutingModule } from './app.routing';
import { AdminModule } from './admin/admin.module';
import { FrontendModule } from './frontend/frontend.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthGuard } from './service/auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './service/token-interceptor.service';

import { ItemService } from './service/item.service';
import { CartEntryComponent } from './cart/cart-entry.component';
import { ShopModule } from './cart/shop.module';

import { CartService } from './service/cart.service';
import { HttpModule } from '@angular/http';
import { ProductlistComponent } from './cart/component/productlist.component';




@NgModule({
  declarations: [
    AppComponent,
   
  
   ],
  imports: [
    ShopModule,
    BrowserModule,
    FrontendModule,
    AdminModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule 
  ],
  providers: [ItemService,AuthService, AuthGuard, CartService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
 