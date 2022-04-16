import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { User } from 'src/app/services/Register/register.service';
import { MoviesServices } from '../../services/Movies/Movies.service';
import { Item } from 'src/app/models/Item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
    cookieValue!:string

  photoProfil:any = "../assets/Unsplash-Avatars_0003s_0012_alex-lacayo-hchKfNuAblU-unsplash.png"
    inconnu:any = "../assets/Images/inconnu.png"
  user!:User
  pseudo:String = "pseudo"
  ListFavoris!:Item[]
  selectedFile!: File;
  disabled=true;
  
  
  constructor(private cookieService: CookieService,private api:MoviesServices,private http:HttpClient) { 
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
      /*  let test=new FormData()
        test.append('image',this.se)
         this.http.post('http://51.158.72.178:1337/api/upload/',{
           files:this.selectedFile
         }).subscribe(data=>{
           console.log(data)
         })
*/
let FormData1=new FormData()
FormData1.append('image',this.selectedFile)
axios
  .post('http://51.158.72.178:1337/api/upload', {
     files:FormData1
  
  },{
    headers: {
      'Authorization': `Bearer ${this.cookieValue}`,
       'Content-Type': this.selectedFile.type,
    'Accept': this.selectedFile.type,
   
    },
  })
  
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });
  
      }
      


 

    }


  ngOnInit(): void {
        
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

  

  


  


