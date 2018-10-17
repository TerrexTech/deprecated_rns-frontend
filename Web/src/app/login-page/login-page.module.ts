import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { LoginPageRoutes } from './login-page.routing'

import { LoginPageComponent } from './login-page.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LoginPageRoutes),
        FormsModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginPageComponent
    ]
})

export class LoginPageModule { }
