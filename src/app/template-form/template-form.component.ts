import { Component, ViewChild } from '@angular/core';

// import { Hero } from '../hero';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  constructor (private router : Router){}
  

  onButtonclick(){  //logic for lavigate to another page
this.router.navigateByUrl("")  //given the path of home
  }

  

@ViewChild ('myform') signUpForm : NgForm;

  onFormSubmit(){
    console.log(this.signUpForm)
  }




//   powers = ['Really Smart', 'Super Flexible',
//   'Super Hot', 'Weather Changer'];

// model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

// submitted = false;

// onSubmit() { this.submitted = true; }


}
