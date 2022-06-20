import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userSettingForm: FormGroup;
  modalRef: BsModalRef;
  constructor(private router:Router,
    private modalService:BsModalService) { }

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

  openUserModel(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
