import { NgModule } from '@angular/core';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BannerComponent } from './banner/banner.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component'; // For links in the sidenav
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditExperienceComponent } from './experience/add-edit-experience/add-edit-experience.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AdminPanelComponent,
    BannerComponent,
    ExperienceComponent,
    AboutComponent,
    ServiceComponent,
    AddEditExperienceComponent,
  ],
  imports: [
    ReactiveFormsModule,
    AdminPanelRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,

  ]
})
export class AdminPanelModule {
  showFiller = false;
}
