import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class jaarService {
  private adminUser = { username: 'rony', password: 'rony123', type: 'admin', fullName: 'Admin User' };

  constructor() {
    this.initializeAdmin();
  }

  private initializeAdmin() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([this.adminUser]));
    }
  }

  registerUser(user: any): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u: any) => u.username === user.username)) {
      return false; 
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  loginUser(username: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logoutUser() {
    localStorage.removeItem('loggedInUser');
  }

  getLoggedInUser() {
    return JSON.parse(localStorage.getItem('loggedInUser') || 'null');
  }

  isAdmin() {
    const user = this.getLoggedInUser();
    return user && user.type === 'admin';
  }
}