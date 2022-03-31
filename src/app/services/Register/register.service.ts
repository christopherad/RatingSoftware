import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

export interface User {
  username?: string;
  email?: string;
  password?: string;
}
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private authApiBase: string =
    'http://51.158.72.178:1337/api/auth/local/register';

  constructor(private http: HttpClient) {}

  register(user: any) {
    axios
      .post('http://51.158.72.178:1337/api/auth/local/register', {
        username: user.username,
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
    axios
      .post(`http://51.158.72.178:1337/api/auth/send-email-confirmation`, {
        email: user.email, // user's email
      })
      .then((response) => {
        console.log('Your user received an email');
      })
      .catch((error) => {
        console.error('An error occurred:', error.response);
      });
  }
}
