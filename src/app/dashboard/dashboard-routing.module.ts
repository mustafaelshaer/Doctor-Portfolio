import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { AdminPanelComponent } from './admin-panel/admin-panel/admin-panel.component';

const routes: Routes = [
  {path:'',component:AuthComponent,pathMatch:'full'},
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'adminPanel',loadChildren:()=>import('./admin-panel/admin-panel.module').then(m=>m.AdminPanelModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
