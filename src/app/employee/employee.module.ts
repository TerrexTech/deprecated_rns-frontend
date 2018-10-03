import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

// Material Components
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material'

import { EmployeeRoutes } from "./employee.routing.module";
import { ManageUserMainComponent } from './manage-user-main/manage-user-main.component'
import { UserAddComponent } from './user-add/user-add.component'
import { UserTableComponent } from './user-table/user-table.component'
import { UserUpdateComponent } from './user-update/user-update.component'

@NgModule({
  declarations: [
    ManageUserMainComponent,
    UserAddComponent,
    UserTableComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    // Material Components
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    RouterModule.forChild(EmployeeRoutes)
  ],
  providers: [],
  exports: [
    ManageUserMainComponent
  ]
})
export class EmployeeModule {}
