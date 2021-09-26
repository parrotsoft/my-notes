import { Component, OnInit } from '@angular/core';
import { NotesService } from "../../services/notes.service";
import { Select, Store } from "@ngxs/store";
import { NoteListAction } from "../../state/note/note.actions";
import { NoteState } from "../../state/note/note.state";
import { Observable } from "rxjs";
import { IUser } from "../../models/user.user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notes : any = [];
  @Select(NoteState.onNoteListAction) onNoteListAction$: Observable<IUser[]> | undefined;

  constructor(private notesService: NotesService, private store: Store) { }

  ngOnInit(): void {
    this.onLoadData();
  }

  onLoadData() {
    this.store.dispatch(new NoteListAction());

    this.notesService.list().subscribe((resp: any) => {
      this.notes = resp;
    });
  }

}
