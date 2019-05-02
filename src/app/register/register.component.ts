import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Http, Response} from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  constructor(
    private http: Http, 
    private router: Router,
    private authService: AuthService, 
    private formBuilder: FormBuilder,
  ){ }

  registerForm: FormGroup;
  isSubmitted  =  false;

  ngOnInit(){
    this.registerForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
    });
  }
  get formControls() { return this.registerForm.controls; }

  onClickCancel(){
    this.router.navigate(['login']);
  }
  onRegisterUser() {
    console.log(this.registerForm.value);

    this.isSubmitted = true;

    if (this.registerForm.value.invalid) {
      return;
    }
    else{
      return this.http.post('http://localhost:8000/api/user', this.registerForm.value)
      .subscribe(
        (response: Response) => {
          this.router.navigate(['login']);
        },
        (error) => {
          console.log(error)
          alert(error)
        }
      );
    }
  }
}

