import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AddComponent } from './add/add.component'
import { ShowComponent } from './show/show.component'
import { AuthGuard } from '../guards'

export const routes: Routes = [
    {
        path: 'inventory',
        children: [{
            path: 'show',
            component: ShowComponent
        },
        {
            path: 'add',
            component: AddComponent
        },
    ]
    }
]

