import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      loginId: new FormControl(''),
      password: new FormControl(''),
    });
  }
  
  onSubmit() {
    if(this.loginForm.controls['loginId'].value=="Admin" && this.loginForm.controls['password'].value=="admin") {
      localStorage.setItem("isAuthenticated", "true");
      this.router.navigate(['/project-list']);
    } else {
      localStorage.setItem("isAuthenticated", "false");
    }
  }
}
