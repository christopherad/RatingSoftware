import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  logo:any = "../assets/Group24.png"
  iconeFB:any = "../assets/icone-facebook-ronde.png"
  iconeTW:any = "../assets/icone-twitter-ronde.png"
  iconeIG:any = "../assets/240px-Instagram-Icon.png"
  iconeGH:any = "../assets/25231.png"
  constructor() { }

  ngOnInit(): void {
  }

}
