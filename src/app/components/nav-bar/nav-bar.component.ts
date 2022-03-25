import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    ImageRatings:any="../../assets/Images/Ratings.png";
  DarkMode:any="../../assets/Images/Darkmode.png"

  constructor() { }

  ngOnInit(): void {
  }

}
