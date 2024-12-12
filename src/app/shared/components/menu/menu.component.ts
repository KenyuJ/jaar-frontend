import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../auth/services/LoginService.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {  
  userName: string = '';

  constructor(private router: Router, private loginService: LoginService){}

  ngOnInit(){

    const usuario = this.loginService.loadUserPefilLocalStorage()
  
    usuario.usu_nombre?.toUpperCase()
   
    this.userName = usuario.usu_nombre?.toUpperCase()!;
  }
}
