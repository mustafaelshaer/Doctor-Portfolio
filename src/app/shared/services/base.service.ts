import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }
  doctorName:string = "John Smith" ;
  specialty:string = "Health Specialist"

}
