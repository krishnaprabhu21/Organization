import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { MemberService } from './member/member-list/member.service';
//
import { DashboardComponent } from './dashboard/dashboard.component';

import { ErrorComponent } from './error/error.component';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { GroupListComponent } from './group/group-list/group-list.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { LeftNavbarComponent } from './shared/left-navbar/left-navbar.component';
import { LeftTopNavbarComponent } from './shared/left-navbar/left-top-navbar/left-top-navbar.component';
import { LeftDownNavbarComponent } from './shared/left-navbar/left-down-navbar/left-down-navbar.component';
import { RightNavbarComponent } from './shared/right-navbar/right-navbar.component';
import { RightTopNavbarComponent } from './shared/right-navbar/right-top-navbar/right-top-navbar.component';
import { RightBottomNavbarComponent } from './shared/right-navbar/right-bottom-navbar/right-bottom-navbar.component';
import { AuthServiceService } from './services/authentication.service';

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
    LeftDownNavbarComponent,
    RightNavbarComponent,
    RightTopNavbarComponent,
    RightBottomNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CookieModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: false })
  ],
  providers: [MemberService, AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
