import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_KEY = environment.API_KEY;
const APIVIDEOGAMES_KEY = environment.APIVIDEOGAMES_KEY;
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchResults = new Subject();
  searchGames = new Subject();
  constructor(private http: HttpClient) {}

  getResults(searchTerm: string, page: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${searchTerm}&page=${page}&include_adult=false
     `
    );
  }
  passResults(results: any): void {
    this.searchResults.next(results);
  }
  getPassedResults(): Observable<any> {
    return this.searchResults.asObservable();
  }

  getGame(searchGames: string): Observable<any> {
    return this.http.get(
      `https://rawg.io/api/games?key=${APIVIDEOGAMES_KEY}&search=${searchGames}
     `
    );
  }
  passResultsGames(results: any): void {
    this.searchGames.next(results);
  }
  getPassedResultsGames(): Observable<any> {
    return this.searchGames.asObservable();
  }
}
