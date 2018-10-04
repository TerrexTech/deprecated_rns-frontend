import { Routes } from '@angular/router';

import { RegisterComponent } from './register.component'

export const LoginRoutes: Routes = [{
    path: '',
    children: [{
        path: 'register',
        component: RegisterComponent
    }]
}];