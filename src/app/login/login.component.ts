import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroupDirective, NgForm,Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
// import { UserService } from '../service/user.service';
import { LoginServiceService } from '../Services/login-service.service';
import { first } from 'rxjs/operators';
import { AlertService } from '../Services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted: boolean=false;
 
constructor( private alertService: AlertService,private route: ActivatedRoute, public dialogRef: MatDialogRef<LoginComponent>,private  dialog:  MatDialog, private  router:  Router,private formBuilder:FormBuilder,private loginService:LoginServiceService) { }
hideModel() {
  this.dialogRef.close("Closed");
}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }
  
  logIn() {
  
  this.isSubmitted = true;
    if(this.loginForm.invalid){
     
    const req = {
      userName: this.loginForm.value.userName,
      password: this.loginForm.value.password
    };
    }
    if(this.loginForm.controls.userName.value == 'Admin' && this.loginForm.controls.password.value == '12345') {
    this.router.navigate(["form"]);
}
else {
  alert("Invalid credentials")
  this.loginForm.reset();
}
}
}
