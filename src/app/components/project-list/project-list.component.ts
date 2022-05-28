import { Component, OnInit,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(private router:Router,
    private modalService:BsModalService,
    ) { }

  ngOnInit(): void {
  }

  logout() {
    this.modalRef.hide();
    this.router.navigate([""]);
    localStorage.clear();
  }

  openUserModel(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }

  newProjectClick() {
    this.router.navigate(['/create-and-edit-project']);
  }

  userProfileClick() {
    this.modalRef.hide();
    this.router.navigate(['/user-profile']);
  }


}
