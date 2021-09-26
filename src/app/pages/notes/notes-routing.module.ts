import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "../../layout/layout.component";
import { NewNoteComponent } from "./new-note/new-note.component";

const routes: Routes = [
  {
    path: 'new',
    component: NewNoteComponent
  },
  {
    path: 'edit/:id',
    component: NewNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
