import { AuthGuard } from './service/auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ItemsComponent } from './items/items.component';

// import { GuardService } from "./services/guard.service";

const appRoutes: Routes = [
   {    path: '',    component: LandingComponent  },
   {    path: 'home',    component: LandingComponent  },
   {    path: 'news',    component: NewsComponent  },
   {    path: 'items',    component: ItemsComponent  },
   {    path: 'signup',    component: SignupComponent  },
   {    path: 'login',    component: LoginComponent  },
   {    path: '404',    component: AddItemComponent  },


   {    path: 'additem',   canActivate: [AuthGuard],  component: AddItemComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
  
})
export class AppRoutingModule {

}


