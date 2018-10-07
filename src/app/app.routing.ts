import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from "./layouts/auth/auth-layout.component";
import { AuthGuard } from "./guards/auth.guard";

export const routes: Routes = [{
    path: '',
    canActivate: [AuthGuard],
    redirectTo: 'dashboard',
    pathMatch: 'full',
}, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
        path: '',
        canActivate: [AuthGuard],
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, {
        path: 'inventory',
        loadChildren: './inventory/inventory.module#InventoryModule',
        canActivate: [AuthGuard]
    },
        {
            path: 'login',
            loadChildren: './login-page/login-page.module#LoginPageModule',
            canActivate: [AuthGuard]
        },
        {
            path: 'employee',
            loadChildren: './employee/employee.module#EmployeeModule',
            canActivate: [AuthGuard]
        },
        {
            path: 'monitoring',
            loadChildren: './monitoring/monitoring.module#MonitoringModule',
            canActivate: [AuthGuard]
        }
    ]
},
{
    path: '',
    component: AuthLayoutComponent,
    children: [   {
            path: 'login',
            loadChildren: './login-page/login-page.module#LoginPageModule',
            canActivate: [AuthGuard]
        }
]
},
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
