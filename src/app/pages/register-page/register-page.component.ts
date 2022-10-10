import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerResponse = ''
  registerClass = ''
  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) { }

  registerForm = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required, Validators.minLength(6)]],
    email: [null, [Validators.required,Validators.email]],
    mobile: [null, [Validators.required, Validators.pattern('^[0-9]{10}$')]]
  })

  ngOnInit(): void {
  }

  get username() {
    return this.registerForm.get('username')
  }
  get password() {
    return this.registerForm.get('password')
  }

  get email() {
    return this.registerForm.get('email')
  }

  get mobile() {
    return this.registerForm.get('mobile')
  }

  submitForm() {
    console.log(this.registerForm.value)
    this.auth.register(this.registerForm.value).subscribe((response) => {
      console.log(response)
      this.registerResponse = "registered successfully, thank you"
      this.registerClass = 'alert-success'
      
      this.router.navigateByUrl('login')

    },
      (error) => {
        console.log(error)
        this.registerResponse = "registration failed, try again"
        this.registerClass = 'alert-danger'
      }
    );
  }

}
