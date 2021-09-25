import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTreeModule } from "@angular/material/tree";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from "@angular/router";
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    RouterModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    HeaderComponent
  ],
})
export class MaterialModule { }
