import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toggle:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  setToggle() {
    this.toggle =! this.toggle;
  }

  logout() {
    this.router.navigate(["/"]);
    localStorage.clear();
  }

  userProfileClick() {
    this.router.navigate(['/user-profile']);
  }
}
