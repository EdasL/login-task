import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Http, Response} from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(
    private http: Http, 
    private router: Router,
    private authService: AuthService, 
    private formBuilder: FormBuilder,
  ){ }

  loginForm: FormGroup;
  isSubmitted  =  false;

  ngOnInit(){
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get formControls() { return this.loginForm.controls; }

  onClickRegister(){
    this.router.navigate(['register']);
  }

  onLoginUser(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;

    if (this.loginForm.value.invalid) {
      return;
    }
    else{
      this.authService.login(this.loginForm.value);
      return this.http.post('http://localhost:8000/api/login', this.loginForm.value)
      .subscribe(
        (response: Response) => {
          this.router.navigate(['home']);
        },
        (error) => {
          console.log(error)
          alert(error)
        }
      );
    }
  }
}
