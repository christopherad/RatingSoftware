import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-detaille',
  templateUrl: './note-detaille.component.html',
  styleUrls: ['./note-detaille.component.css']
})
export class NoteDetailleComponent implements OnInit {
   EmojiContent:any="../../assets/Images/EmojiContent.png";
   EmojiEnnuye:any="../../assets/Images/EmojiEnnuyé.png";
   EmojiTriste:any="../../assets/Images/EmojiTriste.png";
   EmojiAmuse:any="../../assets/Images/EmojiAmusé.png";
   EmojiChoque:any="../../assets/Images/EmojiChoqué.png";
  constructor() { }

  ngOnInit(): void {
  }

}
