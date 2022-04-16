import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import { Item } from 'src/app/models/Item';
import { MoviesServices } from 'src/app/services/Movies/Movies.service';
import { VideogamesService } from 'src/app/services/videogames.service';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent implements OnInit {
  user: any;
  idVideo?:string|undefined
Videogame!:Item
isVideogame=true
   ImageFilm:any="../../assets/Images/Joker.jpg";
 ImageFavori:any="../../assets/Images/coeur.png";
 IsMessage:boolean=false
isError:boolean=false;
  cookieValue!: string;
  idutilisateur:string=""
  isFavourite:boolean=false
  ListeVideogames!:any;
 ImageNonFavori:any="../../assets/Images/nonFavori.png"
  idfavoris: any;
   hideNoteFilm=true;
  NoteGeneral: string="0";

  constructor(private route: ActivatedRoute,private api:VideogamesService,private cookieService: CookieService,private apimovies:MoviesServices) {this.idVideo=this.route.snapshot.paramMap.get('id')! 
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
       this.api.GetDetailVideogames(this.idVideo!).subscribe(data=>{
      this.Videogame=data;
        axios.get('http://51.158.72.178:1337/api/users/me ', {
    headers: {
      Authorization: `Bearer ${this.cookieValue}`,
    },
  })
  .then((response) => {
    // Handle success.
    this.user=response.data
    this.idutilisateur=this.user.id

//Notes
axios
  .get(`http://51.158.72.178:1337/api/notes/${this.idVideo}`, {
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
this.ListeVideogames=response.data.items
this.VerifierFavoris(this.ListeVideogames,this.Videogame.id)
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
    OnClick(){
    this.IsMessage=false;
  }
   OnClickError(){
    this.isError=false;
  }
     AddFavoris(){
    console.log(this.idutilisateur)
   console.log(this.Videogame)
   if(this.isFavourite==true){
   this.idfavoris=this.ListeVideogames[0].idFavorites
    this.apimovies.DeleteFavourite(this.idfavoris,this.cookieValue)
    this.isError=true;
    setTimeout(()=>{location.reload()},500)
   }
   else
   {
 this.apimovies.AddFavourite(this.Videogame,this.idutilisateur,this.cookieValue,"Jeu Vidéo")
 setTimeout(()=>{this.IsMessage=true},500)
   }
   

  }


}
