import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  isIn:boolean = false;

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }

    toggleState() {
      let bool = this.isIn;
      this.isIn = bool === false ? true : false; 
  }
}
