import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

// Material Components Here

// Font-Awesome
import fontawesome from '@fortawesome/fontawesome'
import {
  faLemon
} from '@fortawesome/fontawesome-free-solid'

import { AppRoutingModule } from './app-routing.module'

import { AppContainer } from './App/app.component'

// Add Font-Awesome being used icons here
fontawesome.library.add(
  faLemon
)

// Angular Material
@NgModule({
  declarations: [
    AppContainer
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    NgbModule.forRoot()
    // Material Components Here
  ],
  providers: [
  ],
  bootstrap: [AppContainer]
})
export class AppModule {}
