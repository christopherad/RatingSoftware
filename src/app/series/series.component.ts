import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { APIService } from '../api.service';
import { Serie } from '../models/Serie';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
   ImageFilm:any="../../assets/Images/Joker.jpg";
 ImageFavori:any="../../assets/Images/coeur.png";

idSerie?:string|undefined
Serie!:Serie
isSerie=true

  constructor(private route: ActivatedRoute,private api:APIService) {this.idSerie=this.route.snapshot.paramMap.get('id')! }

  ngOnInit(): void {
      console.log(this.idSerie)
      
    this.api.GetDetailTvShow(this.idSerie!).subscribe(data=>{
      this.Serie=data;
      console.log(this.Serie)
    })
  }

}
