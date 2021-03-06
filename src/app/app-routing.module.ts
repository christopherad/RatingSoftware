import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { SearchComponent } from './pages/search/search.component';
import { TvshowComponent } from './pages/tvshow/tvshow.component';
import { VideogamesComponent } from './pages/videogames/videogames.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { ResetComponent } from './pages/reset/reset.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Search/:id', component: SearchComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'Movie/:id', component: MoviesComponent },
  { path: 'Serie/:id', component: TvshowComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Videogame/:id', component: VideogamesComponent },
  { path: 'Profil', component: ProfilComponent },
  { path: 'ForgotPassword', component: ForgotpasswordComponent },
  { path:'reset', component:ResetComponent},
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
