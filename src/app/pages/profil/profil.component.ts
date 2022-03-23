import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  photoProfil:any = "../assets/Unsplash-Avatars_0003s_0012_alex-lacayo-hchKfNuAblU-unsplash.png"
  pseudo:String = "pseudo"
  
  constructor() { }

  ngOnInit(): void {
  }

}
