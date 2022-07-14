import { Component, OnInit,} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms'
import { AppComponent }  from '../app.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
  
})

export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
log(x: any) {
  console.log(x)
}
type(x:any) {
  let fake;
  typeof(x) === 'number' ? fake = true : fake = false

}

validateEmail(input: any) {

  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {

    return true;

  } else {

    return false;
  }
 
}
sendInfo(){
  console.log(NgModel)
}
}


