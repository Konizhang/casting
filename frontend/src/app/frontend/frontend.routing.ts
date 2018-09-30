import { LandingComponent } from './landing/landing.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const frontRoutes: Routes = [

   {    path: 'landing',    component: LandingComponent  },
  // {    path: 'about',      component: AboutComponent  },
  // {    path: 'login',      component: LoginComponent  },
  // {    path: 'signup',     component: SignupComponent  },
  // {    path: 'service',    component: ServiceComponent , canActivate: [GuardService] },
  // {    path: 'messages',    component: MessageComponent , canActivate: [GuardService] ,
  //     children: [
  //     { path: 'inbox', component: InboxComponent },
  //     //{ path: '', redirectTo: '/messages',  component: MessageComponent  , canActivate: [GuardService] }, 
  //   ]
  // }

 // {    path: '',  redirectTo: '/landing',  pathMatch: 'full'  },
];
 
@NgModule({
    imports: [
      RouterModule.forChild(frontRoutes)
    ],
    exports: [RouterModule],
    providers: [
 
    ]
  })
  export class RecipesRoutingModule {}
  
