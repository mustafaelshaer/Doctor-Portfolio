import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-experience',
  templateUrl: './add-edit-experience.component.html',
  styleUrls: ['./add-edit-experience.component.scss']
})
export class AddEditExperienceComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
addEditForm : FormGroup
constructor(){
  this.addEditForm = new FormGroup ({
    header :new FormControl('', [Validators.required,Validators.minLength(3)]),
    description :new FormControl('',[Validators.required,Validators.minLength(3)])
  })
}
}
