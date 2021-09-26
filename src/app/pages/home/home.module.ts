import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from "../../material/material.module";
import { NgxsModule } from "@ngxs/store";
import { NoteState } from "../../state/note/note.state";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    NgxsModule.forFeature([NoteState])
  ]
})
export class HomeModule { }
