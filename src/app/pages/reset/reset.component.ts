import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResetpasswordService } from 'src/app/services/resetpassword.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  code!:string
  isMessage:boolean=false
   passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmationpassword');

  return password?.value === confirmPassword?.value ? null : { notmatched: true };
};
  
  ResetPasswordForm=new FormGroup({
    password:new FormControl('',Validators.minLength(6)),
    confirmationpassword:new FormControl('',Validators.minLength(6))
  },{validators:this.passwordMatchingValidatior})

  constructor(private resetpasswordservice: ResetpasswordService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        this.code = params['code']; // Print the parameter to the console. 
    });
  }
  onSubmit(){
    const {password,confirmationpassword}=this.ResetPasswordForm.value
    console.log(this.code)
    this.resetpasswordservice.ResetPassword(this.code,password,confirmationpassword)
    this.isMessage=true

       
    
    

  }


}
