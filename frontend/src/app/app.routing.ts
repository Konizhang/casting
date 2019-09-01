
import { LoginComponent } from './frontend/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminModule } from './admin/admin.module';
import { FrontendModule } from 'src/app/frontend/frontend.module';
import { ShopModule } from './cart/shop.module';

// import { GuardService } from "./services/guard.service";

const appRoutes: Routes = [

   {    path: 'admin',   loadChildren: () => AdminModule, },
   {    path: 'shop',  loadChildren: () => ShopModule },
   {    path: '',  loadChildren: () => FrontendModule },
   {    path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


