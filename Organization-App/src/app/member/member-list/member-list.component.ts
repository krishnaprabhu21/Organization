import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.service';
import { IMembers } from './members';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  pageTitle: string = "Members";
  Members: IMembers[];
  errorMessage: string;

  constructor(private _MemberService: MemberService) {

  }

  ngOnInit() {
    // this._MemberService.getAll()
    //     .subscribe(Members => this.Members = Members,
    //     error => this.errorMessage = <any>error);

    this._MemberService.getAll().subscribe(
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
