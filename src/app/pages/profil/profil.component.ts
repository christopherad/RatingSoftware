import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { User } from 'src/app/services/Register/register.service';
import { MoviesServices } from '../../services/Movies/Movies.service';
import { Item } from 'src/app/models/Item';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
    cookieValue!:string

  photoProfil:any = "../assets/Images/inconnuman.jpg"
    inconnu:any = "../assets/Images/inconnu.png"
  user!:User
  pseudo:String = "pseudo"
  ListFavoris!:Item[]
  selectedFile!: File;
  disabled=true;
  ListImage:[]=[]
  avatar:string=this.photoProfil


  
  
  constructor(private cookieService: CookieService,private api:MoviesServices,private http:HttpClient,private route: Router) { 
this.cookieValue = this.cookieService.get('user');
        console.log(this.cookieValue)
  }
    onFileChanged(event:any) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
    this.disabled=false
  }




    onUpload() {
      console.log(this.selectedFile)
      if(this.selectedFile!==null){

let FormData1=new FormData()
FormData1.append('files',this.selectedFile)
axios
  .post('http://51.158.72.178:1337/api/upload', 
     FormData1
  
  ,{
    headers: {
      'Authorization': `Bearer ${this.cookieValue}`,
       'Content-type': this.selectedFile.type,
   
    },
  })
  
  .then(response => {
    let Formdatauser=new FormData()


  axios
  .put(`http://51.158.72.178:1337/api/users/${this.user.id}`, 
   {
     avatar:this.selectedFile.name
   },
  
  {
    headers: {
      'Authorization': `Bearer ${this.cookieValue}`,
    },
  })
  
  .then(response => {
location.reload()
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });
  
      }
    }
AfficherAvatarUser(){
   axios 
  .get(`http://51.158.72.178:1337/api/upload/files`, {
    headers: {
      Authorization: `Bearer ${this.cookieValue}`,
    },
  })
  .then(response => {
    this.ListImage=response.data
    this.ListImage.map((image:any)=>{
      if(image.name==this.user.avatar){
        this.avatar= `http://51.158.72.178:1337${image.url}`

      }
      else
      {
        this.avatar=this.photoProfil
      }
    })
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });  
}

details(id:number,categorie:string){
  
  if(categorie=="Film")
  {
    this.route.navigate([`/Movie/${id}`])
  }
  else if(categorie=="Série"){
this.route.navigate([`/Serie/${id}`])
  }
  else
  {
this.route.navigate([`/Videogame/${id}`])
  }
  

}



  ngOnInit(): void {
    this.AfficherAvatarUser();
        
        axios.get('http://51.158.72.178:1337/api/users/me ', {
    headers: {
      Authorization: `Bearer ${this.cookieValue}`,
    },
  })
  .then((response) => {
    // Handle success.
    this.user=response.data
    console.log('Data: ', this.user);
      axios 
  .get(`http://51.158.72.178:1337/api/favoris/${this.user.id}`, {
    headers: {
      Authorization: `Bearer ${this.cookieValue}`,
    },
  })
  .then(response => {
this.ListFavoris=response.data.items
console.log(this.ListFavoris)
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });  
  })
   
  
  .catch((error) => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
}}

  

  


  


