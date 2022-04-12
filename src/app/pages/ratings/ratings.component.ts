import { Component, OnInit } from '@angular/core';
import { NgxStarRatingModule } from 'ngx-star-rating';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
   EmojiContent:any="../../assets/Images/EmojiContent.png";
   EmojiEnnuye:any="../../assets/Images/EmojiEnnuyé.png";
   EmojiTriste:any="../../assets/Images/EmojiTriste.png";
   EmojiAmuse:any="../../assets/Images/EmojiAmusé.png";
   EmojiChoque:any="../../assets/Images/EmojiChoqué.png";
rate?:number
rate2?:number
rate3?:number
rate4?:number
  constructor() {
this.rate=1
this.rate2=1
this.rate3=1;
this.rate4=1;
  }

  ngOnInit(): void {

  }

}
