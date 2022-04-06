import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from './Register/register.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  user!: User;

  constructor(private http: HttpClient) { }

  GetUserProfil(Cookie:String){
axios.get('http://51.158.72.178:1337/api/users/me ', {
    headers: {
      Authorization: `Bearer ${Cookie}`,
    },
  })
  .then((response) => {
    // Handle success.
    this.user=response.data
    console.log('Data: ', this.user);
  })
  .catch((error) => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
  }
  
}
