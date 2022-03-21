import { Component, OnInit } from '@angular/core';
import { APIService } from "../api.service";
import { Film } from  '../models/Film';
import { Serie } from '../models/Serie';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

FilmPopular!: Film[];
TVShowPopular!: Serie[];
  constructor(private api:APIService) {       
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
 
     
     
    
    
    
  }
}





