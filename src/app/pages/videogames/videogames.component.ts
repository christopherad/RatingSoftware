import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/Item';
import { VideogamesService } from 'src/app/services/videogames.service';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent implements OnInit {
  idVideo?:string|undefined
Videogame!:Item
isVideogame=true
   ImageFilm:any="../../assets/Images/Joker.jpg";
 ImageFavori:any="../../assets/Images/coeur.png";

  constructor(private route: ActivatedRoute,private api:VideogamesService) {this.idVideo=this.route.snapshot.paramMap.get('id')!  }

  ngOnInit(): void {
       this.api.GetDetailVideogames(this.idVideo!).subscribe(data=>{
      this.Videogame=data;
      console.log(this.Videogame)
    })
  }

}
