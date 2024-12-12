import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/LoginService.service';
import { AuthResponse } from '../interfaces/auth-response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  message = '';

  userAuth ?: AuthResponse

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {

    this.submitted = true;

    if (this.loginForm.invalid)
    {
      return;
    }
    else 
    {              
      const username = this.loginForm.controls['username'].value;
      const password = this.loginForm.controls['password'].value;
    
      this.loginService.login({ username, password }).subscribe({

        next: (response) => {

          this.userAuth = response
          this.loginService.saveTokenLocalStorage(response.login.token)
          this.loginService.saveUserPefilLocalStorage(response.login.usuario)

          this.router.navigate(['/menu']);
        },

        error: (err) => {
          this.message = err
        }

      })

    }     

  }  
  
}