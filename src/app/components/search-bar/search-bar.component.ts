import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  searchTerm = '';

  constructor(
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  searchWeb(): void {
    console.log('Search Term', this.searchTerm);
    if (this.searchTerm === '') return;

    this.searchService.getResults(this.searchTerm).subscribe(
      (response: any) => {
        this.searchService.passResults({
          results: response.results,
          total: response.total_results,
        });
      },
      (error: any) => {
        console.log('Error Occured', error);
      }
    );
  } //total_results + results
  onKeyEnterEvent(event: any) {
    if (this.searchTerm == '') {
      this.router.navigate(['/Search/'], {
        relativeTo: this.route,
      });
    }
    this.router.navigate(['/Search/' + this.searchTerm], {
      relativeTo: this.route,
    });
  }
}
