import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { SearchComponent } from './pages/search/search.component';
import { TvshowComponent } from './pages/tvshow/tvshow.component';
import { VideogamesComponent } from './pages/videogames/videogames.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Search/:id', component: SearchComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'Movie/:id', component: MoviesComponent },
  { path: 'Serie/:id', component: TvshowComponent },
    { path: 'Videogame/:id', component: VideogamesComponent },
  { path: 'Login', component: LoginComponent },
  {path:'Profil',component:ProfilComponent},
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
