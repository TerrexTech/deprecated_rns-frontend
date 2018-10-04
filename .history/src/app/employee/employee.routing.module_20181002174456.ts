import { Routes } from '@angular/router';

// import { ManageUserMainComponent } from './manage-user-main/manage-user-main.component'
import { UserAddComponent } from './user-add/user-add.component'
import { UserTableComponent } from './user-table/user-table.component'
import { UserUpdateComponent } from './user-update/user-update.component'

export const EmployeeRoutes: Routes = [{
    path: '',
    children: [{
        path: 'add-employee',
        component: UserAddComponent
    },
    {
        path: 'view-employee',
        component: UserTableComponent
    },
    {
        path: 'update-employee',
        component: UserUpdateComponent
    }
    ]
}];