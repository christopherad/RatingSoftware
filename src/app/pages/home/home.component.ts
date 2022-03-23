import { Component, OnInit } from '@angular/core';
import { MoviesServices } from "../../services/Movies/Movies.service";
import { Film } from  '../../models/Film'
import { Serie } from '../../models/Serie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

FilmPopular!: Film[];
TVShowPopular!: Serie[];
  constructor(private api:MoviesServices) {       
    this.api.PopularFIlm().subscribe((data) => {
    console.log(data.results)
    this.FilmPopular=data.results
        
    })
  this.api.GetPopularTvShow().subscribe((data)=>{
   this.TVShowPopular=data.results
   console.log(this.TVShowPopular)
  })
  
  }
      
 
  

  ngOnInit(): void {
 
     console.log("home")
     
    
    
    
  }
}





