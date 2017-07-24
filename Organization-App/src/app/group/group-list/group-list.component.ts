import { Component, OnInit } from '@angular/core';
import { GroupsService } from './groups.service';
import { IGroups } from './Groups';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  pageTitle: string = "Members";
  Members: IGroups[];
  errorMessage: string;
  constructor(private _groupService: GroupsService) {

  }
  GroupName;

  ngOnInit() {
    this._groupService.getAllGroups().subscribe(
      data => {
        this.Members = data;
        console.log("Members: ", this.Members)
      },
      error => {
        console.log("Members: user details, ", error)
      },
      () => {
      })

    this.GroupName = [

    ];


  }

  GroupsForm = new FormGroup({
    GroupName: new FormControl()
  })

  onsubmit(value) {
    this.GroupName.push(value);
    console.log("Submit", value);
  }


}


