import { AllitemComponent } from './item/allitem.component';
import { AdditemComponent } from './item/additem.component';
import { AuthGuard } from '../service/auth.guard';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './adminhome/adminhome.component';
import { MainContentComponent } from 'src/app/admin/main-content/main-content.component';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';


const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: AdminHomeComponent } ,
      { path: 'additem', component:  AdditemComponent},
      { path: 'main', component: MainContentComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'allitem', component: AllitemComponent }
    
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
  
})
export class AdminRoutingModule {

}


