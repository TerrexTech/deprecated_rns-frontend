import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { RegisterComponent } from "./register/register.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
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
            loadChildren: './login-page/',
            canActivate: [AuthGuard]
        }
    ]
},
{
    path: '',
    component: AuthLayoutComponent,
    children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
    }, {
            path: '',
            canActivate: [AuthGuard],
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        },
    {
        path: 'inventory',
        loadChildren: './inventory/inventory.module#InventoryModule',
        canActivate: [AuthGuard]
    },
        {
            path: 'login',
            loadChildren: './login-page/',
            canActivate: [AuthGuard]
        }
]
},
    {
        path: '**',
        redirectTo: ''
    }
]


// const routes: Routes = [
//     {
//     path: '',
//     component: AdminLayoutComponent,
//     children: [{
//         path: '',
//         component: DashboardComponent
//         },
//         {
//             path: 'login',
//             component: LoginPageComponent
//         },
//         {
//             path: 'register',
//             component: RegisterComponent
//         },
//         {
//             path: 'add',
//             component: AddComponent
//         },
//         {
//             path: 'show',
//             component: ShowComponent
//         }

// ]}
// ]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
