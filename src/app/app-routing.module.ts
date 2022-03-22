import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {AccueilComponent} from './accueil/accueil.component'
import {Erreur404Component} from './erreur404/erreur404.component';
import { FilmsComponent } from './films/films.component';
import { SeriesComponent } from './series/series.component';
import { NoteDetailleComponent } from './note-detaille/note-detaille.component';


const routes: Routes = [
  {path:"", redirectTo:"/Accueil",pathMatch:"full"},
  {path:"Login",component:LoginComponent},
  {path:"Accueil",component:AccueilComponent},
  {path:"Film/:id",component:FilmsComponent},
  {path:"Serie/:id",component:SeriesComponent},
  {path:"**",component:Erreur404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
