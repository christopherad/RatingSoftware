import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  results: any[] = [];
  total = 0;
  constructor(private SearchService: SearchService) {}

  ngOnInit(): void {
    this.SearchService.getPassedResults().subscribe(
      (response: any) => {
        this.results = response.results;
        this.total = response.total;
        console.log('Results and Total', this.results, this.total);
      },
      (error: any) => {
        console.log('error Occured', error);
      }
    );
  }
}
