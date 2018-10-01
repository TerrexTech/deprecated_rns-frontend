import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryModule } from './inventory/inventory.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InventoryModule,
    LoginPageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
