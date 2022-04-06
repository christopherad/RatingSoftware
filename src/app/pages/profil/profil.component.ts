import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { User } from 'src/app/services/Register/register.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
    cookieValue?:string

  photoProfil:any = "../assets/Unsplash-Avatars_0003s_0012_alex-lacayo-hchKfNuAblU-unsplash.png"
  user!:User
  pseudo:String = "pseudo"
  
  
  constructor(private cookieService: CookieService) { 
this.cookieValue = this.cookieService.get('user');
        console.log(this.cookieValue)
  }

  ngOnInit(): void {
        
        axios.get('http://51.158.72.178:1337/api/users/me ', {
    headers: {
      Authorization: `Bearer ${this.cookieValue}`,
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
       // let decoded=jwt_decode(this.cookieValue)
       // console.log(decoded)
      

// Request API.

  


  }

}
