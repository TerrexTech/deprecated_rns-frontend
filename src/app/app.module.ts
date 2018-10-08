import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routes } from './app.routing'
import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthenticationService, UserService  } from './services/';
import { LoginPageModule } from './login-page/login-page.module';
import {
  ErrorInterceptor,
  fakeBackendProvider,
  JwtInterceptor,
  TokenExtraction
} from './helpers'
import { AuthGuard } from './guards/auth.guard';
import { SensorReportComponent } from './reports/sensor-report/sensor-report.component';
import { InventoryReportComponent } from './reports/inventory-report/inventory-report.component';
import { EthyleneReportComponent } from './reports/ethylene-report/ethylene-report.component';
import { SavingsReportComponent } from './reports/savings-report/savings-report.component';
import { WasteReportComponent } from './reports/waste-report/waste-report.component';
import { FlashSaleReportComponent } from './reports/flash-sale-report/flash-sale-report.component';
import { ReportTemplateComponent } from './reports/report-template/report-template.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    SensorReportComponent,
    InventoryReportComponent,
    EthyleneReportComponent,
    SavingsReportComponent,
    WasteReportComponent,
    FlashSaleReportComponent,
    ReportTemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SidebarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
    FixedPluginModule,
    FooterModule,
    NavbarModule,
    LoginPageModule
  ],
  providers: [
    ErrorInterceptor,
    JwtInterceptor,
    TokenExtraction,
    UserService,
    AuthGuard,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
