import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesServices } from '../../services/Movies/Movies.service';
import { Item } from '../../models/Item';
import { CookieService } from 'ngx-cookie-service';
import axios from 'axios';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
 ImageFilm:any="../../assets/Images/Joker.jpg";
 ImageFavori:any="../../assets/Images/coeur.png";
 ImageNonFavori:any="../../assets/Images/nonFavori.png"
 hideNoteFilm=true;
  idutilisateur:string=""


idFilm?:string|undefined
Film!:Item
  cookieValue: string;
  user: any;
  IsMessage:boolean=false
  isError:boolean=false;
ListFilm!:any;
isFavourite:boolean=false
idfavoris!:string

  constructor(private route: ActivatedRoute,private api:MoviesServices ,private cookieService: CookieService) {
this.idFilm=this.route.snapshot.paramMap.get('id')!
this.cookieValue = this.cookieService.get('user');
   }
  ngOnInit(): void {
    console.log(this.idFilm)
    this.api.GetDetailFilm(this.idFilm!).subscribe(data=>{
      this.Film=data;
 axios.get('http://51.158.72.178:1337/api/users/me ', {
    headers: {
      Authorization: `Bearer ${this.cookieValue}`,
    },
  })
  .then((response) => {
    // Handle success.
    this.user=response.data
    this.idutilisateur=this.user.id
  axios 
  .get(`http://51.158.72.178:1337/api/favoris/${this.idutilisateur}`, {
    headers: {
      Authorization: `Bearer ${this.cookieValue}`,
    },
  })
  .then(response => {
this.ListFilm=response.data.items

this.VerifierFavoris(this.ListFilm,this.Film.id)
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });  
  })

  .catch((error) => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });

    })
  }
  AddFavoris(){
    console.log(this.idutilisateur)

   if(this.isFavourite==true){
    //Suppresion des Favoris
    this.idfavoris=this.ListFilm[0].idFavorites
    this.api.DeleteFavourite(this.idfavoris,this.cookieValue)
    this.isError=true;
    setTimeout(()=>{location.reload()},500)
   }
   else
   {
 this.api.AddFavourite(this.Film,this.idutilisateur,this.cookieValue)
    this.IsMessage=true;
     setTimeout(()=>{location.reload()},500)
   }
   

  }
  OnClick(){
    this.IsMessage=false;
  }
   OnClickError(){
    this.isError=false;
  }
  public VerifierFavoris(ListItem:Item[],idFilm:number){
  
   ListItem.forEach(items=>{
   items.item.forEach(item2=>{
    if(item2.id===idFilm)
    {
     this.isFavourite=true

    }
    
    })
   
     
   })

  }


}
