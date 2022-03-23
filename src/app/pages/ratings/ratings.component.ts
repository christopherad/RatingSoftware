import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
