import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryModule } from './inventory/inventory.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from "./register/register.component";
import { AppRoutingModule } from "./app.routing.module";
import { TokenExtraction } from "./helpers";
import { SidebarModule } from "./sidebar/sidebar.module";
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,
    RegisterComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    InventoryModule,
    SidebarModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
    FixedPluginModule,
    FooterModule,
    NavbarModule,
  ],
  providers: [TokenExtraction],
  bootstrap: [AppComponent]
})
export class AppModule { }
