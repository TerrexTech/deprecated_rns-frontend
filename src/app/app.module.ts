import { ShowComponent } from './inventory/show/show.component';
import { AddComponent } from './inventory/add/add.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { DashboardModule } from './dashboard/dashboard.module'
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthenticationService, UserService  } from './services/';
import { LoginPageModule } from './login-page/login-page.module';
import { CommonModule } from '@angular/common'

import {
  ErrorInterceptor,
  fakeBackendProvider,
  JwtInterceptor,
  TokenExtraction
} from './helpers'
import { AuthGuard } from './guards/auth.guard'
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";
import { DialogDataDialog } from './inventory/dialog-data/dialog-data.component'

import { UserAddComponent } from './employee/user-add/user-add.component'
import { UserTableComponent } from './employee/user-table/user-table.component'

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AddComponent,
    ShowComponent,
    DialogDataDialog,
    UserAddComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SidebarModule,
    ReactiveFormsModule,
    DashboardModule,
    RouterModule.forRoot(AppRoutes),
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
    FixedPluginModule,
    FooterModule,
    NavbarModule,
    LoginPageModule,
    CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatOptionModule,
        MatPaginatorModule,
        MatSelectModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule
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
    entryComponents: [
      DialogDataDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
