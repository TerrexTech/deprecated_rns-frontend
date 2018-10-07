import { Routes } from '@angular/router';

import { CarbonComponent } from "./carbon/carbon.component"
import { EthyleneComponent } from "./ethylene/ethylene.component"
import { SensorComponent } from "./sensor/sensor.component"
import { TemperatureComponent } from "./temperature/temperature.component"

export const MonitoringRoutes: Routes = [{
    path: '',
    children: [{
        path: 'carbon-report',
        component: CarbonComponent
    }]
}];