import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { INote } from "../models/note.note";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  list(): Observable<INote[]> {
    return this.http.get<INote[]>('api/notes');
  }

}
