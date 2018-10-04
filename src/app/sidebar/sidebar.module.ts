import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SidebarComponent } from './sidebar.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap/collapse/collapse.module";
import { TokenExtraction } from '../helpers'
import { ScrollbarModule } from "ngx-scrollbar";

@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule, ScrollbarModule ],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}


