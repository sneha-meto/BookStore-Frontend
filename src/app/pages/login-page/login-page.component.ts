import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  // loginForm=new FormGroup({
  //   email: new FormControl("g@mail.com"),
  //   password: new FormControl('123')
  // })
  loginResponse = ''
  loginClass = ''
  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) { }

  loginForm = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  })

  ngOnInit(): void {
  }

  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }

  submitForm() {
    // console.log(this.userModel)
    this.auth.login(this.loginForm.value).subscribe((response) => {
      console.log(response)
      this.loginResponse = "logged in successfully, thank you"
      this.loginClass = 'alert-success'
      localStorage.setItem('token', response.token)
      localStorage.setItem('userId', response[0])
      localStorage.setItem('role', response[1])

      if (response[1]==0){
        //admin
        this.router.navigateByUrl('admin/home')
      }
      else this.router.navigateByUrl('home')

    },
      (error) => {
        console.log(error)
        this.loginResponse = "login failed, try again"
        this.loginClass = 'alert-danger'
      }
    );
  }
}
