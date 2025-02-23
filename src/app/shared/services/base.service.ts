import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }
  doctorName:string = "Samar Hatem" ;
  specialty:string = "Dentist"

}
