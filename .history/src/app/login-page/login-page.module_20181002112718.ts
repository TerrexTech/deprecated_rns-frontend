import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutes } from './login-page.routing';

import { LoginPageComponent } from './login-page.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LoginRoutes),
        FormsModule,
        FormsModule
    ],
    declarations: [
        LoginPageComponent,
    ]
})

export class LoginModule { }
