import { MemberListComponent } from './member/member-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

export const ROUTES: Routes = [
    { path: 'member', component: MemberListComponent },
    { path: '', component: DashboardComponent },
    { path: '**', component: ErrorComponent }
];
