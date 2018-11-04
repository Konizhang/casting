import { LandingComponent } from './landing.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewsComponent } from './news.component';
import { ItemsComponent } from './items.component';
import { AuthGuard } from '../service/auth.guard';

import { SignupComponent } from './signup.component';
import { LoginComponent } from './login.component';
import { ContactusComponent } from './contactus.component';

const frontRoutes: Routes = [

  {    path: '',        component: LandingComponent  },
  {    path: 'home',    component: LandingComponent  },
  {    path: 'news',    component: NewsComponent  },
  {    path: 'items',   component: ItemsComponent },
  {    path: 'signup',  component: SignupComponent  },
  {    path: 'login',   component: LoginComponent  },
  {    path: 'contact', component: ContactusComponent  }
];
 
@NgModule({
  imports: [RouterModule.forChild(frontRoutes)],
  exports: [RouterModule],
    providers: [
    AuthGuard
    ]
  })
  export class FrontendRoutingModule {}
  
