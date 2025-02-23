import { BaseService } from './../../../shared/services/base.service';
import { Component } from '@angular/core';




@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
  showFiller = false;

  constructor(private _BaseService:BaseService)
  {
  }

  doctorName:string= this._BaseService.doctorName
}
