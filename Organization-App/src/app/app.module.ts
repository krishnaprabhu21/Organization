import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

//
import { DashboardComponent } from './dashboard/dashboard.component';

import { ErrorComponent } from './error/error.component';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { GroupListComponent } from './group/group-list/group-list.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { LeftNavbarComponent } from './shared/left-navbar/left-navbar.component';
import { LeftTopNavbarComponent } from './shared/left-navbar/left-top-navbar/left-top-navbar.component';
import { LeftDownNavbarComponent } from './shared/left-navbar/left-down-navbar/left-down-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
  //  HomeComponent,
    DashboardComponent,
    MemberListComponent,
    ErrorComponent,
    GroupListComponent,
    TeamListComponent,
    LeftNavbarComponent,
    LeftTopNavbarComponent,
    LeftDownNavbarComponent
  ],
  imports: [
    BrowserModule,
        FormsModule,
    RouterModule.forRoot(ROUTES, { useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
