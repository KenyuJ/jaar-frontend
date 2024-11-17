import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jaarService } from '../../../auth/services/LoginService.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  userName: string = '';

  constructor(private router: Router, private username: jaarService){}

  ngOnInit(){
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.userName = loggedInUser.fullName || 'Usuario';
  }
}
