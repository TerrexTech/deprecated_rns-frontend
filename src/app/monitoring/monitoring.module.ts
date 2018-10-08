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
import { GaugeChartComponent } from 'angular-gauge-chart'
import { DataTablesModule } from 'angular-datatables';

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
    MatButtonModule,
    MatGridListModule,
    MatGridTile
} from '@angular/material'
import { SensorComponent } from './sensor/sensor.component';

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
        MatButtonModule,
        MatGridListModule,
        DataTablesModule
    ],
    declarations: [
        CarbonComponent,
        OverviewComponent,
        DataTableComponent,
        SensorComponent,
        GaugeChartComponent,
    ]
})

export class MonitoringModule{}
