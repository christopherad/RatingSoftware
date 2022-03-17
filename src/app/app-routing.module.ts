import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {AccueilComponent} from './accueil/accueil.component'
import {Erreur404Component} from './erreur404/erreur404.component';
import { FilmsComponent } from './films/films.component';


const routes: Routes = [
  {path:"", redirectTo:"/Accueil",pathMatch:"full"},
  {path:"Login",component:LoginComponent},
  {path:"Accueil",component:AccueilComponent},
  {path:"Film",component:FilmsComponent},
  {path:"**",component:Erreur404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
