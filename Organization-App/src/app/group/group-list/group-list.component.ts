import { Component, OnInit } from '@angular/core';
import { GroupsService } from './groups.service';
import { IGroups } from './Groups';
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
  }

}

 
