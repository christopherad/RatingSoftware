import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

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
    return this.http.get<any>(`https://api.themoviedb.org/3/tv/${idSerie}/credits?api_key=${API_KEY}&language=fr`)
  }


}
