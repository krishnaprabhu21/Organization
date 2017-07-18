import { GroupListComponent } from './group/group-list/group-list.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

export const ROUTES: Routes = [
    { path: 'member-list', component: MemberListComponent },
    { path: 'team-list', component: TeamListComponent },
    { path: 'group-list', component: GroupListComponent },
    { path: '', component: DashboardComponent },
    { path: '**', component: ErrorComponent }
];
