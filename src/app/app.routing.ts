import { UserAddComponent } from './employee/user-add/user-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component'
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component'
import { AuthGuard } from './guards/auth.guard'
import { LoginPageModule } from './login-page/login-page.module';
import { LoginPageComponent } from './login-page/login-page.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './inventory/add/add.component';
import { ShowComponent } from './inventory/show/show.component';
import { UserTableComponent } from './employee/user-table/user-table.component';

export const AppRoutes: Routes = [
    {
    path: '',
    component: AdminLayoutComponent,
    children: [{
        path: '',
        canActivate: [AuthGuard],
        component: DashboardComponent
    }, {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    }, {
        path: 'login',
        component: LoginPageComponent
    }, {
        path: 'inventory/add',
        canActivate: [AuthGuard],
        component: AddComponent
    }, {
        path: 'inventory/show',
        canActivate: [AuthGuard],
        component: ShowComponent
    }, {
        path: 'employee/show-employees',
        canActivate: [AuthGuard],
        component: UserTableComponent
    }, {
        path: 'employee/add-employees',
        canActivate: [AuthGuard],
        component: UserAddComponent
    }
]
    }
]
@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
