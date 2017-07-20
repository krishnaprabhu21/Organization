import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {IGroups} from '../../../group/group-list/Groups';
import {GroupsService} from '../../../group/group-list/groups.service';

@Component({
  selector: 'app-left-down-navbar',
  templateUrl: './left-down-navbar.component.html',
  styleUrls: ['./left-down-navbar.component.css']
})
export class LeftDownNavbarComponent implements OnInit {
  groups: IGroups[];
  constructor(private _groupService: GroupsService) { }

  ngOnInit() {
     this._groupService.getAllGroups().subscribe(
      data => {
        this.groups = data;
        console.log("groups: ", this.groups)
      },
      error => {
        console.log("groups: groups details, ", error)
      },
      () => {
      })
}
 @Output() notify: EventEmitter<string> = new EventEmitter<string>();
   clicked(groupName) {
        // console.log("bom: ", groupName);
      this.notify.emit(groupName);
  }
  
}
