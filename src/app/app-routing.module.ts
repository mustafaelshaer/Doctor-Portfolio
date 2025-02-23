import { PortfolioPageComponent } from './portal/portfolio-page/portfolio-page.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:PortfolioPageComponent,pathMatch:'full'},
  {path : 'portal', loadChildren:()=>import('./portal/portal.module').then(m=>m.PortalModule)},
  {path : 'dasboard',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
