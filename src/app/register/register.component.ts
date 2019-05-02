import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response} from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  constructor(private http: Http, private router: Router){

  }

      onClickCancel(){
        this.router.navigate(['login']);
      }
      onRegisterUser(form: NgForm) {
      const value = form.value;
      console.log(value)
      return this.http.post('http://localhost:8000/api/user', value)
      .subscribe(
        (response: Response) => {
          this.router.navigate(['login']);
        },
        (error) => console.log(error)
      );
    }
  }

