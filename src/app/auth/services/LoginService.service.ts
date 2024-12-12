import { Injectable } from '@angular/core';
import { GraphqlService } from '../../jaar/services/graphql.service';
import { Login } from '../interfaces/login.interface';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { LOGIN_MUTATION } from '../mutations/login.mutation';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token_key = "token_key"
  private user_key = "user_key"

  constructor( private readonly graphService : GraphqlService ) { }

  login(loginUser : Login)
  {
    const variables = {
      loginInput: {
        username: loginUser.username,
        password: loginUser.password
      }
    }

    return this.graphService.executeMutation<AuthResponse>(LOGIN_MUTATION, variables)
  }

  saveTokenLocalStorage(token : string)
  {
    localStorage.setItem(this.token_key, token);
  }

  saveUserPefilLocalStorage(user : Usuario)
  {
    localStorage.setItem(this.user_key, JSON.stringify(user));
  }

  loadUserPefilLocalStorage() : Usuario
  {
    const user = JSON.parse( localStorage.getItem(this.user_key) || 'null')
    return user
  }

 /*  registerUser(user: any): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u: any) => u.username === user.username)) {
      return false; 
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  } */

 /*  loginUser(username: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  } */


/*   getLoggedInUser() {
    return JSON.parse(localStorage.getItem('loggedInUser') || 'null');
  } */

/*   isAdmin() {
    const user = this.getLoggedInUser();
    return user && user.type === 'admin';
  } */
}