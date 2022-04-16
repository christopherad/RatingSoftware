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

 hideNoteFilm=true;
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
  idfavoris: any;
  NoteGeneral: string="0"


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

///Fonction Afficher Note
axios
  .get(`http://51.158.72.178:1337/api/notes/${this.idSerie}`, {
    headers: {
      Authorization: `Bearer ${this.cookieValue}`,
    },
  })
  .then(response => {
     let test:number
   test= response.data.note
  
  this.NoteGeneral=test.toFixed(2)
 
  
   
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });


    //Favoris 
   axios 
  .get(`http://51.158.72.178:1337/api/favoris/${this.idutilisateur}`, {
    headers: {
      Authorization: `Bearer ${this.cookieValue}`,
    },
  })
  .then(response => {
this.ListSerie=response.data.items
this.VerifierFavoris(this.ListSerie,this.Serie.id)
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });
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
   this.idfavoris=this.ListSerie[0].idFavorites
    this.api.DeleteFavourite(this.idfavoris,this.cookieValue)
    this.isError=true;
    setTimeout(()=>{location.reload()},500)
   }
   else
   {
 this.api.AddFavourite(this.Serie,this.idutilisateur,this.cookieValue,"Série")
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

}
