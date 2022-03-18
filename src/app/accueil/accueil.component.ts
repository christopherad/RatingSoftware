import { Component, OnInit } from '@angular/core';
import { APIService } from "../api.service";
import { Film } from  '../models/Film';

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





