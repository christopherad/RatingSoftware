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
  pageMovies = 1;
  constructor(
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //this.searchTerm = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {}
  searchWeb(): void {
    if (this.searchTerm === '') return;
    console.log('recherche', this.searchTerm);
    this.searchService.getResults(this.searchTerm, this.pageMovies).subscribe(
      (response: any) => {
        this.searchService.passResults({
          resultsMovies: response.results,
          total: response.total_results,
          pageMovies: response.page,
        });
      },
      (error: any) => {
        console.log('Error Occured', error);
      }
    );
  }
  onKeyEnterEvent(event: any) {
    // if (this.searchTerm == '') {
    //   this.router.navigate(['/Search/'], {
    //     relativeTo: this.route,
    //   });
    // }
    this.router.navigate(['/Search/' + this.searchTerm], {
      relativeTo: this.route,
    });
  }
}
