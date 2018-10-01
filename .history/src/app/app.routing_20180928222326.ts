import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'history',
    component: HistoryPageComponent
  },
  {
    path: 'monitoring',
    component: MonitorPageComponent
  },
  {
    path: 'reports',
    component: ReportPageComponent
  },
  {
    path: 'choose-store',
    component: EnterpriseChooseStoreComponent
  },
  {
    path: 'support-ticket',
    component: SupportTicketComponent
  },
  {
    path: 'inventory-add',
    component: InventoryAddComponent
  },
  {
    path: 'inventory-view',
    component: InventoryPageComponent
  },
  {
    path: 'view',
    component: ViewPageComponent
  },
  {
    path: 'addmod-menu',
    component: AddmodMenuPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
