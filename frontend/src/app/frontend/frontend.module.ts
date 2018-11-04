import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsComponent } from './news.component';
import { ItemsComponent } from './items.component';
import { LandingComponent } from './landing.component';
import { SignupComponent } from './signup.component';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontendRoutingModule } from './frontend.routing';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../service/item.service';
import { AuthService } from '../service/auth.service';
import { AuthGuard } from '../service/auth.guard';
import { TokenInterceptorService } from '../service/token-interceptor.service';
import { PageHeaderComponent } from './page-header.component';
import { ContactusComponent } from './contactus.component';

  
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FrontendRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:  [
    PageHeaderComponent
  ],
  declarations: [  ItemsComponent,
    SignupComponent,
    LoginComponent,
    NewsComponent,
    LandingComponent,
    PageHeaderComponent,
    ContactusComponent ],
    providers: [ItemService,AuthService, AuthGuard, 
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
      }],
})
export class FrontendModule { }
