import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import axios from 'axios';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
Cadenas:any="../../assets/Images/cadenas.png";

ConnexionForm=new FormGroup({
  email:new FormControl(''),
  password:new FormControl('')
})
  constructor() { }

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
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });

  

  }

}
