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
import { SidebarModule } from "./sidebar/sidebar.module";
import { AppRoutingModule } from "./app.routing.module";
import { TokenExtraction } from "./helpers";
import { CoreModule } from "./sidebar/core.module";

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
    CoreModule,
    InventoryModule,
    SidebarModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [TokenExtraction],
  bootstrap: [AppComponent]
})
export class AppModule { }
