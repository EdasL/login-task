import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isIn:boolean = false;

    toggleState() {
      let bool = this.isIn;
      this.isIn = bool === false ? true : false; 
  }
}
