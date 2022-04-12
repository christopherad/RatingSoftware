import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { MoviesServices } from 'src/app/services/Movies/Movies.service';
import { VideogamesService } from 'src/app/services/videogames.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  FilmPopular!: Item[];
  TVShowPopular!: Item[];
  VideoGamesPopular!: Item[];
  isClicked = false;
  constructor(
    private api: MoviesServices,
    private apivideo: VideogamesService
  ) {
    this.api.PopularFIlm().subscribe((data) => {
      console.log(data.results);
      this.FilmPopular = data.results;
    });
    this.api.GetPopularTvShow().subscribe((data) => {
      this.TVShowPopular = data.results;
      console.log(this.TVShowPopular);
    });
    this.apivideo.PopularVideoGames().subscribe((data) => {
      this.VideoGamesPopular = data.results;
      console.log(this.VideoGamesPopular);
    });
  }

  ngOnInit(): void {
    console.log('home');
  }
}
