import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AddComponent } from './add/add.component'
import { ShowComponent } from './show/show.component'
import { AuthGuard } from '../guards'

const routes: Routes = [
    {
        path: 'food-items',
        component: AddComponent
    },
    {
        path: 'add-food',
        component: ShowComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class InventoryRoutingModule { }
