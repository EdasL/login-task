import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isIn:boolean = false;

  constructor(
    private router : Router,
    private authService : AuthService
  ){};
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false; 
  }
}
