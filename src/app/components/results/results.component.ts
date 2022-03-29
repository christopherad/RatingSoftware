import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  idResult = '';
  resultsMovies: any[] = [];
  pageMovies = 1;
  total = 0;

  constructor(
    private SearchService: SearchService,
    private route: ActivatedRoute
  ) {
    //this.idResult = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idResult = params['id'];
      this.SearchService.getResults(this.idResult, this.pageMovies).subscribe(
        (response: any) => {
          this.resultsMovies = response.results;
        }
      );
    });
    // this.SearchService.getResults(this.idResult).subscribe((data) => {
    //   this.resultsMovies = data.results;
    //   this.total = data.total_results;
    //   console.log('recherche', this.idResult);
    //   // this.page = data.page;
    // });

    this.getMovies();
  }

  getMovies() {
    this.SearchService.getPassedResults().subscribe(
      (response: any) => {
        this.resultsMovies = response.resultsMovies;
        this.total = response.total;
        this.pageMovies = response.page;
        console.log('recherche', this.idResult);
      },
      (error: any) => {
        console.log('error Occured', error);
      }
    );
  }
}
