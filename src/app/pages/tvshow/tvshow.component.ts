import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MoviesServices } from '../../services/Movies/Movies.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {
   ImageFilm:any="../../assets/Images/Joker.jpg";
 ImageFavori:any="../../assets/Images/coeur.png";


idSerie?:string|undefined
Serie!:Item
isSerie=true

  constructor(private route: ActivatedRoute,private api:MoviesServices) {this.idSerie=this.route.snapshot.paramMap.get('id')! }

  ngOnInit(): void {
      console.log(this.idSerie)
      
    this.api.GetDetailTvShow(this.idSerie!).subscribe(data=>{
      this.Serie=data;
      console.log(this.Serie)
    })
  }

}
