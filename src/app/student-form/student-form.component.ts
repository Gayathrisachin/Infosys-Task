import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder, FormControlName } from '@angular/forms';
// import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from "@angular/material";
import { Router } from '@angular/router';
import { AdmissionService } from '../admission.service';
import { Admission } from '../models/admissionForm.model';
// import * as moment from 'moment';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

import { UserService} from '../Services/user.service';
import { User } from '../models/register.model';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
 
})


export class StudentFormComponent implements OnInit {
  user: User[];
 
  constructor(private userService: UserService, private router: Router, ) { }
  ngOnInit() {
    this.userService.getUsers()
      .subscribe((data: User[]) => {
        this.user = data;
      });
  }
  // deleteuser(User: User): void {
  //   this.userService.deleteuser(User.id)
  //     .subscribe(data => {
  //       this.user = this.user.filter(u => u !== User);
  //     });
  // }
  editEmp(User: User) {
    localStorage.removeItem('editEmpId');
    localStorage.setItem('editEmpId', User.id.toString());
    this.router.navigate(['edit-comp']);
  }

  addEmp(): void {
    localStorage.removeItem('editEmpId');
    this.router.navigate(['add-emp']);
  }
}

