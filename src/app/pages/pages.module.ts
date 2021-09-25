import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from "../layout/layout.module";
import { HomeModule } from "./home/home.module";
import { NotesModule } from "./notes/notes.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    HomeModule,
    NotesModule
  ]
})
export class PagesModule { }
