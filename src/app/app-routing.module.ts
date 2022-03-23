import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowComponent } from './pages/tvshow/tvshow.component';

const routes: Routes = [
    {path:"", redirectTo:"/Home",pathMatch:"full"},
      {path:"Home",component:HomeComponent},
      {path:"Movie/:id",component:MoviesComponent},
       {path:"Serie/:id",component:TvshowComponent},
      {path:"**",component:Error404Component},
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
