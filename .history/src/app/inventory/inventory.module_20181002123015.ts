import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InventoryRoutes } from './inventory.routing'
import { AddComponent } from './add/add.component'
import { ShowComponent } from './show/show.component'
import { Inventory } from "../models/inventory"


import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule

 } from "@angular/material";
import { DialogDataDialog } from './dialog-data/dialog-data.component'
@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatOptionModule,
        MatPaginatorModule,
        MatSelectModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        RouterModule.forChild(InventoryRoutes),
    ],
    declarations: [
        AddComponent,
        ShowComponent,
        DialogDataDialog,
        DialogDataDialog
        // InvDashComponent
        // FieldErrorDisplayComponent,
    ],
    providers: [
        // AlertService
        Inventory
    ],
    entryComponents: [
        DialogDataDialog
    ]
})

export class InventoryModule {}
