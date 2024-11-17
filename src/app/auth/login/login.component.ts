import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { jaarService } from '../services/LoginService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  message = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private ronnys: jaarService) {}

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

    if (this.loginForm.invalid) {
      return;
    } else {
      const username = this.loginForm.controls['username'].value;
      const password = this.loginForm.controls['password'].value;

      if (this.ronnys.loginUser(username, password)) {
        console.log('Login successful');
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/menu']);
      } else {
        this.message = 'Usuario o contraseña invalido';
      }
    }
  }
}
