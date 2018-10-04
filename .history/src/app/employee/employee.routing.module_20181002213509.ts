import { Routes } from '@angular/router';

// import { ManageUserMainComponent } from './manage-user-main/manage-user-main.component'
import { UserAddComponent } from './user-add/user-add.component'
import { UserTableComponent } from './user-table/user-table.component'
import { UserUpdateComponent } from './user-update/user-update.component'

export const EmployeeRoutes: Routes = [{
    path: '',
    children: [{
        path: 'add-employees',
        component: UserAddComponent
    },
    {
        path: 'show-employees',
        component: UserTableComponent
    },
    {
        path: 'update-employee',
        component: UserUpdateComponent
    }
    ]
}];