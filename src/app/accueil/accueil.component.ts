import { Component, OnInit } from '@angular/core';
import { APIService } from "../api.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

FilmPopular!: Film[];
  constructor(private api:APIService) {       
    this.api.PopularFIlm().subscribe((data) => {
    console.log(data.results)
    this.FilmPopular=data.results
        
    })}
      
 
  

  ngOnInit(): void {
 
     
     
    
    
    
  }
}


export interface Film {
  _id: number;
  title: string;
  description : string;
  poster_path:string;
}

