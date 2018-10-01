import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { HttpHeaders, HttpClient } from '@angular/common/http'


import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormBuilder

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
