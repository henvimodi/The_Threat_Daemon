import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-and-edit-project',
  templateUrl: './create-and-edit-project.component.html',
  styleUrls: ['./create-and-edit-project.component.scss']
})
export class CreateAndEditProjectComponent implements OnInit {
  projectForm: FormGroup;
  selectedFileName:any='';
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(''),
      creatorName: new FormControl(''),
      assignedTo: new FormControl(''),
      creationDate: new FormControl(''),
      description: new FormControl(''),
      fileUrl: new FormControl(''),
    });
  }

  onChangeFile(event) {
    this.selectedFileName =  event.target.files[0];
  };
  
  onSubmit() {

  }

  onCloseClick() {
    this.router.navigate(['project-list']);
  }
}
