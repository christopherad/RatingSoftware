import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const API_KEY=environment.APIVIDEOGAMES_KEY;
@Injectable({
  providedIn: 'root'
})
export class VideogamesService {

  constructor(private http :HttpClient) { }
  PopularVideoGames(){
    return this.http.get<any>(`https://api.rawg.io/api/games?dates=2021-09-01,2022-02-28&ordering=+rating&key=${API_KEY}`)
  }
  GetDetailVideogames(id:string){
    return this.http.get<any>(`https://rawg.io/api/games/${id}?key=${API_KEY}`)
  }
}
