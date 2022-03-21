import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { FilmsComponent } from './films/films.component';
import { CastingComponent } from './casting/casting.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { HttpClientModule } from '@angular/common/http';
import { SeriesComponent } from './series/series.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AccueilComponent,
    LoginComponent,
    Erreur404Component,
    FilmsComponent,
    CastingComponent,
    CommentaireComponent,
    SeriesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
