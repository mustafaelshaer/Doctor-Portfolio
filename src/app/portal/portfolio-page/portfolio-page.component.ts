import { Component } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
declare var $: any;  // Declare jQuery globally

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent {
  constructor(private _BaseService:BaseService)
  {

  }

  doctorName:string= this._BaseService.doctorName
  specialty:string = this._BaseService.specialty
  animatedItems:string[]= ["health", "days", "lives"];

  ngAfterViewInit() {
    // Initialize Owl Carousel
     $('.owl-carousel').owlCarousel({
      stagePadding: 200,
      loop: true,
      margin: 10,
      nav: true,
      //items: 1,  // Show 1 image at a time
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1,
          stagePadding: 0,
        },
        768: {
          items: 1,
          stagePadding: 0,
        },
        1024: {
          items: 1,
          stagePadding: 200,
        }
      },
    });

  }
  active:boolean =true;
}
