import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toggle:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  setToggle() {
    this.toggle =! this.toggle;
  }

  logout() {

  }
}
