import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryModule } from './inventory/inventory.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from "./register/register.component";
import { AppRoutingModule } from "./app.routing.module";
import { TokenExtraction } from "./helpers";
import { SidebarModule } from "./sidebar/sidebar.module"

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,
    RegisterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SidebarModule,
    InventoryModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [TokenExtraction],
  bootstrap: [AppComponent]
})
export class AppModule { }
