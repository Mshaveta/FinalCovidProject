import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

const routes: Routes = [

  { path: 'admin', component: AdminLoginComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  {path:'admin/login',component:AdminLoginComponent},
  {path:'admin/register',component:AdminRegisterComponent}
   

 





];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
