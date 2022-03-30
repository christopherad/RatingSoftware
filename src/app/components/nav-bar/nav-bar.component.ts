import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    ImageRatings:any="../../assets/Images/Ratings.png";
  DarkMode:any="../../assets/Images/Darkmode.png"
  cookieValue!:String;
  constructor(private cookieService:CookieService) { }

 

  ngOnInit(): void {
    this.cookieValue=this.cookieService.get('user');
    console.log(this.cookieValue)
  }
  onClick()
  {
    this.cookieService.delete('user');
    location.reload();
  }

}
