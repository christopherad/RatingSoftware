import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private cookieValue!:Object;
Cadenas:any="../../assets/Images/cadenas.png";

ConnexionForm=new FormGroup({
  email:new FormControl(''),
  password:new FormControl('')
})
  
  
  constructor(private cookieService:CookieService, private router: Router,private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
  }
  onSubmit(){

    const {email,password}=this.ConnexionForm.value
    axios
  .post('http://51.158.72.178:1337/api/auth/local', {
    identifier: "fahimgha10@gmail.com",
    password: "testtest"
  })
  .then(response => {
    // Handle success.
    //console.log('Well done!');
    console.log('User profile', response.data.user);
    //console.log('User token', response.data.jwt);
    this.cookieService.set('user',response.data.jwt)
    this.cookieValue=this.cookieService.get('user');
    
    console.log(this.cookieValue)
   this.router.navigate(['/Home/']).then(()=>{
    location.reload();
   })
  
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });

  

  }

}
