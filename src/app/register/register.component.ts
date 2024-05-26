import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
  
})
export class RegisterComponent {
formGroup=new FormGroup({
  name:new FormControl(''),
  password:new FormControl('')
})
formSubmitted(){
  
  
  console.log(this.formGroup.value)}


}
