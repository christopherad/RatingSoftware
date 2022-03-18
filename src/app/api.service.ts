import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Film } from './models/Film';

const API_KEY=environment.API_KEY;


@Injectable({
  providedIn: 'root'
})
export class APIService {


  constructor(private http :HttpClient) { }

  PopularFIlm(){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr&page=1`)
  }

  GetDetailFilm(idFilm:string){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${idFilm}?api_key=${API_KEY}&language=fr`)
  }
  GetCastFilm(idFilm:string)
  {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${idFilm}/credits?api_key=${API_KEY}&language=fr`)
  }

}
