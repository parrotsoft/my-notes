import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NewNoteComponent } from './new-note/new-note.component';
import { MaterialModule } from "../../material/material.module";
import { FroalaEditorModule } from "angular-froala-wysiwyg";


@NgModule({
  declarations: [
    NewNoteComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MaterialModule,
    FroalaEditorModule
  ]
})
export class NotesModule { }
