import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { NoteListAction } from './note.actions';
import { INote } from "../../models/note.note";
import { NotesService } from "../../services/notes.service";
import { tap } from "rxjs/operators";

export class NoteStateModel {
  public notes!: INote[];
}

const defaults = {
  notes: []
};

@State<NoteStateModel>({
  name: 'note',
  defaults
})
@Injectable()
export class NoteState {

  constructor(private notesService: NotesService) {
  }

  @Selector()
  static onNoteListAction({ notes } : NoteStateModel) {
    return notes;
  }

  @Action(NoteListAction)
  noteListAction({ patchState }: StateContext<NoteStateModel>, { }: NoteListAction) {
    return this.notesService.list().pipe(
      tap((resp: INote[]) => {
        patchState({
          notes: resp
        });
      })
    );
  }

}
