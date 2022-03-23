import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesServices } from '../../services/Movies/Movies.service';
import { Cast } from '../../models/Cast';

@Component({
  selector: 'app-casting',
  templateUrl: './casting.component.html',
  styleUrls: ['./casting.component.css']
})
export class CastingComponent implements OnInit {
 ImageJoaquim:any="../../assets/Images/joaquimphoenix.jpeg";
 ImagePeople:any="../../assets/Images/people.png";
 idFilm?:string|undefined
 Casting!:Cast[]
  @Input() isSerie: any;
 

 
  constructor(private route: ActivatedRoute,private api:MoviesServices) {
    this.idFilm=this.route.snapshot.paramMap.get('id')!
   }

  ngOnInit(): void {
        console.log(this.idFilm)
    
        this.isSerie?( this.api.GetCastTvShow(this.idFilm!).subscribe(cast=>{
             this.Casting=cast.cast;
             console.log(this.Casting)
          })):(  this.isSerie(this.api.GetCastFilm(this.idFilm!).subscribe(cast=>{
          this.Casting=cast.cast;
        
        })))



      
        
        
       
        
  }

}
