import { AllitemComponent } from './item/allitem.component';
import { AdditemComponent } from './item/additem.component';
import { AuthGuard } from '../service/auth.guard';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './adminhome/adminhome.component';
import { MainContentComponent } from 'src/app/admin/main-content/main-content.component';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { EdititemComponent } from './item/edititem.component';
import { AddcustomerComponent } from './customer/addcustomer.component';
import { AllcustomerComponent } from './customer/allcustomer.component';
import { EditcustomerComponent } from './customer/editcustomer.component';


const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: AdminHomeComponent } ,
      { path: 'additem', component:  AdditemComponent},
      { path: 'edititem/:id', component:  EdititemComponent},
      { path: 'main', component: MainContentComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'additem', component: AddcustomerComponent },
      { path: 'allitem', component: AllitemComponent },
      { path: 'allcustomer', component: AllcustomerComponent },
      { path: 'addcustomer', component: AddcustomerComponent },
      { path: 'editcustomer/:id', component: EditcustomerComponent }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
  
})
export class AdminRoutingModule {

}


