import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_KEY = environment.API_KEY;
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchResults = new Subject();
  constructor(private http: HttpClient) {}

  getResults(searchTerm: string): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=fr&page=1`
    );
  }
  passResults(results: any): void {
    this.searchResults.next(results);
  }
  getPassedResults(): Observable<any> {
    return this.searchResults.asObservable();
  }
}
