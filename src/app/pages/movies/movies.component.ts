import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesServices } from '../../services/Movies/Movies.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
 ImageFilm:any="../../assets/Images/Joker.jpg";
 ImageFavori:any="../../assets/Images/coeur.png";
 hideNoteFilm=true;

idFilm?:string|undefined
Film!:Item


  constructor(private route: ActivatedRoute,private api:MoviesServices) {
this.idFilm=this.route.snapshot.paramMap.get('id')!
   }
   
  
   

  ngOnInit(): void {
    console.log(this.idFilm)
    this.api.GetDetailFilm(this.idFilm!).subscribe(data=>{
      this.Film=data;
      console.log(this.Film)
      console.log(this.hideNoteFilm)
    })
  }


}
