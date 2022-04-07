import { Component, OnInit } from '@angular/core';
import { MoviesServices } from "../../services/Movies/Movies.service";
import { Item } from  '../../models/Item'
import { VideogamesService } from 'src/app/services/videogames.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

FilmPopular!: Item[];
TVShowPopular!: Item[];
VideoGamesPopular!:Item[];
  constructor(private api:MoviesServices,private apivideo:VideogamesService) {       
    this.api.PopularFIlm().subscribe((data) => {
    console.log(data.results)
    this.FilmPopular=data.results
        
    })
  this.api.GetPopularTvShow().subscribe((data)=>{
   this.TVShowPopular=data.results
   console.log(this.TVShowPopular)
  })
  this.apivideo.PopularVideoGames().subscribe((data)=>{
    this.VideoGamesPopular=data.results
    console.log(this.VideoGamesPopular);
  })
  
  
  }
      
 
  

  ngOnInit(): void {
 
     console.log("home")
     
    
    
    
  }
}





