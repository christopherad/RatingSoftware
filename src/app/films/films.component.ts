import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { APIService } from '../api.service';
import { Film } from '../models/Film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
 ImageFilm:any="../../assets/Images/Joker.jpg";
 ImageFavori:any="../../assets/Images/coeur.png";
 hideNoteFilm=true;

idFilm?:string|undefined
Film!:Film


  constructor(private route: ActivatedRoute,private api:APIService) {
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
