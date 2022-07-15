import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  showMenu() {
    
    console.log('hello')
  }
  one = 'title-content'
  two = 'test'
  changeClass() {

  }

  status: boolean = false;
clickEvent(){
    this.status = !this.status;       
    console.log('click')
}

isHidden = true;
toggleHidden() {
  this.isHidden = !this.isHidden
  
}
hideMainMenu = false;
toggleMenu() {
  this.hideMainMenu = !this.hideMainMenu
  
}
}