import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms'; //dynamic forms

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
genders= ['male', 'female'];
signUpForm: FormGroup;

constructor(private fb: FormBuilder) { }
ngOnInit(): void{

  //using form builder

this.signUpForm = this.fb.group({   //formBuilder
  username: ['',  Validators.required] ,
  email:['', [Validators.required, Validators.email]],
  gender: [''],
  aliases: this.fb.array([   //dynamic forms
    this.fb.control('')
  ])
})
  


  // this.signUpForm = new FormGroup({   //using formGroup
  //   'username' : new FormControl(null, Validators.required),
  //   'email' : new FormControl(null, [Validators.required, Validators.email]),
  //   'gender' : new FormControl('female'),
  // })
}

get aliases() {
  return this.signUpForm.get('aliases') as FormArray;
}

addAlias() {
  this.aliases.push(this.fb.control(''));
}


onSubmit() {
  // TODO: Use EventEmitter with form value
  console.log(this.signUpForm.value);
}
}
