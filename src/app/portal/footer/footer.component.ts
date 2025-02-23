import { Component } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private _BaseService:BaseService)
  {

  }

  doctorName:string= this._BaseService.doctorName.toLocaleUpperCase()

}
