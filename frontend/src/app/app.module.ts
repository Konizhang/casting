import { AuthService } from './service/auth.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { AdminModule } from './admin/admin.module';
import { FrontendModule } from './frontend/frontend.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './service/auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { NewsComponent } from './news/news.component';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignupComponent,
    LoginComponent,
    NewsComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    FrontendModule,
    AdminModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule 
    
  ],
  providers: [AuthService, AuthGuard, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
