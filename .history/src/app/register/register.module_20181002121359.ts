import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { RegisterRoutes } from './register.routing';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        RouterModule.forChild(RegisterRoutes),
        FormsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        RegisterComponent
    ]
})

export class LoginPageModule { }
