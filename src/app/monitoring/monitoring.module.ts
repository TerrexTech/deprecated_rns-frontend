import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MonitoringRoutes } from "./monitoring.routing";
import { CarbonComponent } from './carbon/carbon.component';
import { OverviewComponent } from "./overview/overview.component";
import { DataTableComponent } from "../data-table/data-table.component";
import { CdkTableModule } from '@angular/cdk/table';

import {
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatButtonModule
} from '@angular/material'

@NgModule({
    imports: [
        CommonModule,
        CdkTableModule,
        RouterModule.forChild(MonitoringRoutes),
        FormsModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatTabsModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatButtonModule
    ],
    declarations: [
        CarbonComponent,
        OverviewComponent,
        DataTableComponent
    ]
})

export class MonitoringModule{}
