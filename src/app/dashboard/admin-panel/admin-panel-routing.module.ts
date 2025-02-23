import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
{path:'',component:AdminPanelComponent
  ,children:[
    {path:'',redirectTo:'banner',pathMatch:"full"},
    {path:'banner',component:BannerComponent},
    {path:'experience',component:ExperienceComponent},
    {path:'about',component:AboutComponent},
    {path:'service',component:ServiceComponent},
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
