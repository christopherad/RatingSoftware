import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { HttpClientModule } from '@angular/common/http';
import { CastingComponent } from './pages/casting/casting.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { TvshowComponent } from './pages/tvshow/tvshow.component';
import { RatingsComponent } from './pages/ratings/ratings.component';
import { ResultsComponent } from './components/results/results.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BarRatingModule } from 'ngx-bar-rating';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    FooterComponent,
    CardComponent,
    Error404Component,
    HomeComponent,
    MoviesComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    CastingComponent,
    CommentsComponent,
    TvshowComponent,
    RatingsComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BarRatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
