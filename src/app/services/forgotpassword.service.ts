import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor(private http: HttpClient) { }

  forgotPassword(email:string)
  {
axios
  .post('http://51.158.72.178:1337/api/auth/forgot-password', {
    email: email, // user's email
  })
  .then(response => {
    console.log('Your user received an email');
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });

  }
}
