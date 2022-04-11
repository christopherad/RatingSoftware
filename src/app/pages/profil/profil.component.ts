import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { User } from 'src/app/services/Register/register.service';
import { MoviesServices } from '../../services/Movies/Movies.service';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
    cookieValue?:string

  photoProfil:any = "../assets/Unsplash-Avatars_0003s_0012_alex-lacayo-hchKfNuAblU-unsplash.png"
    inconnu:any = "../assets/Images/inconnu.png"
  user!:User
  pseudo:String = "pseudo"
  ListFavoris!:Item[]
  
  
  constructor(private cookieService: CookieService,private api:MoviesServices) { 
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
   this.api.AfficherLesFilmsFavoris(this.user.id).subscribe(data=>{
     this.ListFavoris=data.items
     console.log(this.ListFavoris)
   })
  })
  .catch((error) => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
  

  


  }

}
