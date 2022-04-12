import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MoviesServices } from '../../services/Movies/Movies.service';
import { Item } from '../../models/Item';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {
   ImageFilm:any="../../assets/Images/Joker.jpg";
 ImageFavori:any="../../assets/Images/coeur.png";


idSerie?:string|undefined
Serie!:Item
isSerie=true
isFavourite:boolean=false
cookieValue: string;
user: any;
idutilisateur:string=""
ListSerie!:any;
IsMessage:boolean=false
isError:boolean=false;
 ImageNonFavori:any="../../assets/Images/nonFavori.png"


  constructor(private route: ActivatedRoute,private api:MoviesServices,private cookieService: CookieService) {
    this.idSerie=this.route.snapshot.paramMap.get('id')!
  this.cookieValue = this.cookieService.get('user');
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

  ngOnInit(): void {
      console.log(this.idSerie)
      
    this.api.GetDetailTvShow(this.idSerie!).subscribe(data=>{
      this.Serie=data;
      console.log(this.Serie)
       axios.get('http://51.158.72.178:1337/api/users/me ', {
    headers: {
      Authorization: `Bearer ${this.cookieValue}`,
    },
  })
  .then((response) => {
    // Handle success.
    this.user=response.data
    this.idutilisateur=this.user.id
  this.api.AfficherLesFilmsFavoris(this.idutilisateur).subscribe(data=>{
    this.ListSerie=data.items
     this.VerifierFavoris(this.ListSerie,this.Serie.id)
  })
  
  })

  .catch((error) => {
    console.log('An error occurred:', error.response);
  });

    
    })
  }
   AddFavoris(){
    console.log(this.idutilisateur)
   console.log(this.Serie)
   if(this.isFavourite==true){
     this.isError=true
     console.log(this.isError)
   }
   else
   {
 this.api.AddFavourite(this.Serie,this.idutilisateur)
    this.IsMessage=true;
   location.reload()
   }
   

  }
   OnClick(){
    this.IsMessage=false;
  }
   OnClickError(){
    this.isError=false;
  }

}
