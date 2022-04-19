import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Item } from '../../models/Item'
import axios from 'axios';
const API_KEY=environment.API_KEY;

 
@Injectable({
  providedIn: 'root'
})
export class MoviesServices {


  constructor(private http :HttpClient) { }

  PopularFIlm(){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr&page=1`)
  }

  GetPopularTvShow()
  {
    return this.http.get<any>(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=fr&page=1`)
  }

  GetDetailFilm(idFilm:string){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${idFilm}?api_key=${API_KEY}&language=fr`)
  }

  GetDetailTvShow(idSerie:string)
  {
    return this.http.get<any>(`https://api.themoviedb.org/3/tv/${idSerie}?api_key=${API_KEY}&language=fr`)
  }
  GetCastFilm(idFilm:string)
  {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${idFilm}/credits?api_key=${API_KEY}&language=fr`)
  }
    GetCastTvShow(idSerie:string)
  {
    ///
    return this.http.get<any>(`https://api.themoviedb.org/3/tv/${idSerie}/credits?api_key=${API_KEY}&language=fr`)
  }

  DeleteFavourite(idfavoris:string,cookie:string)
  { axios 
  .delete(`http://51.158.72.178:1337/api/favoris/${idfavoris}`, {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  })
  .then((response) => {
    // Handle success.
 
  })
  .catch((error) => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });

  }

  AddFavourite(item:Item,idutilisateur:string, token:string,categorie:string)
  {
    console.log(item.background_image)
axios
  .post('http://51.158.72.178:1337/api/favoris/add', {
     
      userId: idutilisateur,
    itemId: item.id,
    title:item.title,
    description: item.description,
    categorie: categorie,
    poster_path: item.poster_path||item.background_image,
    overview: item.overview,
    vote_average: item.vote_average,
    vote_count: item.vote_count,
    name: item.name,
    genres: item.genres,
    
   
  },{
    headers: {
      'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
      'Content-Type': 'application/json',
    
    },
   
 //format JSON, “name”
  })
  
  .then(response => {
    console.log("Item has been added to your favorites.");
    console.log(response.data)
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });

  }
  AfficherLesFilmsFavoris(idutilisateur:string,token:string){
    

}
  async AddRatings(idutilisateur:string,itemid:string,ListeCritiere:Object[],recommendation:string,critique:string,ressenti:string,token:string){
 const json = JSON.stringify({ data:{userId: idutilisateur,itemId:itemid,recommendation:recommendation,critique:critique,critere:ListeCritiere,ressenti:ressenti }});
const res = await axios.post('http://51.158.72.178:1337/api/notes', json, {
  headers: {
    'Content-Type': 'application/json',
     'Authorization': `Bearer ${token}`,
           'Accept': 'application/json',

  }
});
console.log(res.data.data); // '{"name":"deven"}'
}
}
