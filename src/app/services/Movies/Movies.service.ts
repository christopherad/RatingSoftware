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
  AddFavourite(item:Item,idutilisateur:string)
  {
axios
  .post('http://51.158.72.178:1337/api/favoris/add', {
    userId: idutilisateur,
    itemId: item.id,
    description: item.description,
    poster_path: item.poster_path,
    overview: item.overview,
    vote_average: item.vote_average,
    vote_count: item.vote_count,
    name: item.name,
    genres: item.genres,
    title:item.title //format JSON
  })
  .then(response => {
    console.log("Item has been added to your favorites.");
    console.log(response)
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });

  }
  AfficherLesFilmsFavoris(idutilisateur:string){
    
    return this.http.get<any>(`http://51.158.72.178:1337/api/favoris/${idutilisateur}`)
}
}
