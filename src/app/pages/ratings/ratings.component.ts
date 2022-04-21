import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { Item } from 'src/app/models/Item';
import { MoviesServices } from 'src/app/services/Movies/Movies.service';
import { User } from 'src/app/services/Register/register.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],
})
export class RatingsComponent implements OnInit {
  EmojiContent: any = '../../assets/Images/EmojiContent.png';
  EmojiEnnuye: any = '../../assets/Images/emojiEnnuyé.png';
  EmojiTriste: any = '../../assets/Images/emojiTriste.png';
  EmojiAmuse: any = '../../assets/Images/emoji-amuse.png';
  EmojiChoque: any = '../../assets/Images/emoji-choque.png';
  content: any = '../../assets/Images/content.png';
  Listcritiere: Object[] = [];
  ObjectCritiere1!: Object;
  ObjectCritiere2!: Object;
  ObjectCritiere3!: Object;
  isMessage: boolean = false;

  note1!: number;
  RatingsForm = new FormGroup({
    recommendation: new FormControl(''),
    critique: new FormControl(''),
    critere1: new FormControl(''),
    critere2: new FormControl(''),
    critere3: new FormControl(''),
    ressenti: new FormControl(''),
  });
  rate?: number;
  rate2?: number;
  rate3?: number;
  rate4?: number;
  cookieValue!: string;
  user!: User;
  idFilm: any;
  constructor(
    private cookieService: CookieService,
    private api: MoviesServices,
    private route: ActivatedRoute
  ) {
    this.rate = 1;
    this.rate2 = 1;
    this.rate3 = 1;
    this.rate4 = 1;
    this.cookieValue = this.cookieService.get('user');
    this.idFilm = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    axios
      .get('http://51.158.72.178:1337/api/users/me ', {
        headers: {
          Authorization: `Bearer ${this.cookieValue}`,
        },
      })
      .then((response) => {
        // Handle success.
        this.user = response.data;
        console.log('Data: ', this.user);
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  }
  onSubmit() {
    this.Listcritiere = [];
    this.ObjectCritiere1 = {
      name: 'Cinematographie',
      note: this.RatingsForm.value.critere1,
    };
    this.ObjectCritiere2 = {
      name: 'Histoire',
      note: this.RatingsForm.value.critere2,
    };
    this.ObjectCritiere3 = {
      name: 'Autre',
      note: this.RatingsForm.value.critere3,
    };
    this.Listcritiere.push(this.ObjectCritiere1);
    this.Listcritiere.push(this.ObjectCritiere2);
    this.Listcritiere.push(this.ObjectCritiere3);
    console.log(this.RatingsForm.value);
    console.log(this.Listcritiere);
    const { critique, recommendation, ressenti } = this.RatingsForm.value;

    this.api
      .AddRatings(
        this.user.id,
        this.idFilm,
        this.Listcritiere,
        recommendation,
        critique,
        ressenti,
        this.cookieValue
      )
      .then((response) => {
        location.reload();
      });

    this.api
      .AddRatings(
        this.user.id,
        this.idFilm,
        this.Listcritiere,
        recommendation,
        critique,
        ressenti,
        this.cookieValue
      )
      .then((response) => {
        this.isMessage = true;
      });
  }
}
