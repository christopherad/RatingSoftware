import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {


  constructor(private http: HttpClient,private router: Router) {

   }
   ResetPassword(code:string,password:string,passwordconfirmation:string)
   {
axios
  .post('http://51.158.72.178:1337/api/auth/reset-password', {
    code: code, // code contained in the reset link of step 3.
    password: password,
    passwordConfirmation: passwordconfirmation,
  })
  .then(response => {
    console.log("Your user's password has been reset.");

    setTimeout(()=>this.Redirection(),10000)
     
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });
   }
Redirection(){
  this.router.navigate(['/Home/'])
}

}
