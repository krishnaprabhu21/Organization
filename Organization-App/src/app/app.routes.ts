import { GroupListComponent } from './group/group-list/group-list.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftTopNavbarComponent } from './shared/left-navbar/left-top-navbar/left-top-navbar.component';
import { LeftDownNavbarComponent } from './shared/left-navbar/left-down-navbar/left-down-navbar.component';
import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

export const ROUTES: Routes = [
    {
        path: 'member-list', children: [
            {
                path: 'top-navbar',
                component: LeftTopNavbarComponent,
                outlet: 'navbar-top-left'
            }, {
                path: '',
                component: MemberListComponent,
            },
            {
                path: 'bottom-navbar',
                component: LeftDownNavbarComponent,
                outlet: 'navbar-bottom-left'
            },
        ]
    },
    { path: 'test', component: LeftDownNavbarComponent },
    { path: 'team-list', component: TeamListComponent },
    { path: 'group-list', component: GroupListComponent },
    {
        path: '',
        children: [
            {
                path: '',
                component: DashboardComponent
            }, {
                path: '',
                component: LeftTopNavbarComponent,
                outlet: 'navbar-top-left'
            },
            {
                path: '',
                component: LeftDownNavbarComponent,
                outlet: 'navbar-bottom-left'
            }]
    },
    { path: '**', component: ErrorComponent }
];
