import { NgModule } from '@angular/core';
import { PortalRoutingModule } from './portal-routing.module';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    PortfolioPageComponent,
    FooterComponent
  ],
  imports: [
    PortalRoutingModule,
  ]
})
export class PortalModule { }
