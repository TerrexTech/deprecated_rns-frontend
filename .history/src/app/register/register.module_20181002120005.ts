import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterRoutes } from './register.routing';

import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(RegisterRoutes),
        FormsModule,
        FormsModule
    ],
    declarations: [
        RegisterComponent,
    ]
})

export class LoginPageModule { }
