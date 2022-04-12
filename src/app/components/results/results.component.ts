import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  movieImage: any = 'https://image.tmdb.org/t/p/w300//';
  blankImage: any = '../../assets/img-not-found.png';
  idResult = '';
  idResultGame = '';
  resultsMovies: any[] = [];
  gameResults: any[] = [];
  totalResults = 0;
  pageMovies = 1;
  pageGame = 1;
  // combinedArray: { resultsMovie: any; gameResults: any }[] = [];

  constructor(
    private SearchService: SearchService,
    private route: ActivatedRoute
  ) {
    //this.idResult = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idResult = params['id'];
      this.idResultGame = params['id'];
      this.SearchService.getResults(this.idResult, this.pageMovies).subscribe(
        (response: any) => {
          this.resultsMovies = response.results;
          //this.totalResults = response.total;
        }
      );
      this.SearchService.getGame(this.idResultGame).subscribe(
        (response: any) => {
          this.gameResults = response.results;
        }
      );
    });

    this.getMovies();
  }

  getMovies() {
    this.SearchService.getPassedResults().subscribe(
      (response: any) => {
        this.resultsMovies = response.resultsMovies;
        this.totalResults = response.total;
        this.pageMovies = response.page;
        console.log('movie', this.resultsMovies);
        console.log('total', this.totalResults);
      },
      (error: any) => {
        console.log('error Occured', error);
      }
    );
    this.SearchService.getPassedResultsGames().subscribe(
      (response: any) => {
        this.gameResults = response.gameResults;
        this.pageGame = response.page;
        console.log('game', this.gameResults);
      },
      (error: any) => {
        console.log('error Occured', error);
      }
    );
  }
}
