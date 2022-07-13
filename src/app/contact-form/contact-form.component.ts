import { Component, OnInit,} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
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
}

