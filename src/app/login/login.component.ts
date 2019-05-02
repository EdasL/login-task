import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response} from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private http: Http, private router: Router){

  }

  onClickRegister(){
    this.router.navigate(['register']);
  }
  onLoginUser(form: NgForm){
    const value = form.value;
    console.log(value)
    return this.http.post('http://localhost:8000/api/login', value)
    .subscribe(
      (response: Response) => {
        this.router.navigate(['home']);
      },
      (error) => console.log(error)
    );
  }
}
