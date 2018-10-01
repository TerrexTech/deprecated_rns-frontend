import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryModule } from './inventory/inventory.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from "./register/register.component";
import { SidebarModule } from "./sidebar/sidebar.module";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    InventoryModule,
    SidebarModule,
    RouterModule,
    HttpModule,
    BrowserModule,
    HttpClientModule,
    HTTP_INTERCEPTORS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
