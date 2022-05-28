import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userSettingForm: FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userSettingForm = new FormGroup({
      username: new FormControl(''),
      fullname: new FormControl(''),
      emailId: new FormControl(''),
      imgUrl: new FormControl(''),
    });

  }

  onSubmit() {

  }

  onCloseClick() {
    this.router.navigate(['/project-list']);
  }

}
