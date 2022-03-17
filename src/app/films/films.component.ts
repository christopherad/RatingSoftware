import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
 ImageFilm:any="../../assets/Images/Joker.jpg";
 ImageFavori:any="../../assets/Images/coeur.png";

  constructor() { }

  ngOnInit(): void {
  }

}
