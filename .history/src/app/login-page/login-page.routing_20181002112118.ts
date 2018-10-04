import { Routes } from '@angular/router';

import { LoginPageComponent } from './login-page.component'

export const LoginRoutes: Routes = [{
    path: '',
    children: [{
        path: 'login',
        component: LoginPageComponent
    }]
}];