import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

//
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberListComponent } from './member/member-list.component';
import { ErrorComponent } from './error/error.component';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  //  HomeComponent,
    DashboardComponent,
    MemberListComponent,
    ErrorComponent
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
