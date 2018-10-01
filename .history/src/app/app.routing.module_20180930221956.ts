import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddComponent } from "./inventory/add/add.component";
import { ShowComponent } from "./inventory/show/show.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { RegisterComponent } from "./register/register.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent
    },
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'add',
        component: AddComponent
    },
    {
        path: 'show',
        component: ShowComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
