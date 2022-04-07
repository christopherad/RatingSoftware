import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ForgotpasswordService } from 'src/app/services/forgotpassword.service';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
    IsMessage:boolean=false


  ForgotPasswordForm=new FormGroup({
    email:new FormControl('')
  })
  constructor(private registerService: ForgotpasswordService) { }

  ngOnInit(): void {
  }
  onSubmit(){
     if (this.ForgotPasswordForm.invalid) {
      return;
    }
   const {email}=this.ForgotPasswordForm.value
   console.log(email)
   this.IsMessage=true
   this.registerService.forgotPassword(email)
  }
  onClick(){
    this.IsMessage=false
  }

}
