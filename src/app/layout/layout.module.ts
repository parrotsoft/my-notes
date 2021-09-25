import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";



@NgModule({
  declarations: [
    LayoutComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
      MaterialModule
    ]
})
export class LayoutModule { }
