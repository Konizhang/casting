import { AddItemComponent } from './add-item/add-item.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const adminRoutes: Routes = [

   {    path: 'additem',    component: AddItemComponent  },
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
      RouterModule.forChild(adminRoutes)
    ],
    exports: [RouterModule],
    providers: [
      
    ]
  })
  export class AdminRoutingModule {}
