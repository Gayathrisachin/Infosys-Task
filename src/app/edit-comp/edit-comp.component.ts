import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-edit-comp',
  templateUrl: './edit-comp.component.html',
  styleUrls: ['./edit-comp.component.css']
})
export class EditCompComponent implements OnInit {
  empformlabel = 'Edit Employee';
  empformbtn = 'Update';
  constructor(private formBuilder: FormBuilder, private router: Router, private service: UserService) {
  }

  editForm: FormGroup;
  ngOnInit() {

    this.editForm = this.formBuilder.group({
      id: [],
      item: [''],
      amount: [''],
      category: [''],
      location:[''],
      view:['']
    });

    const userid = localStorage.getItem('editEmpId');
    if (+userid > 0) {
      this.service.getUserById(+userid).subscribe(data => {
        this.editForm.patchValue(data);
      });
    }
  }

  onUpdate() {

    console.log('Update fire');
    this.service.updateUser(this.editForm.value).subscribe(data => {
      this.router.navigate(['student-form']);
      alert("Data saved successfully")
    },
      error => {
        alert(error);
      });
  }
}
