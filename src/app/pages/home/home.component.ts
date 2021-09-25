import { Component, OnInit } from '@angular/core';
import { NotesService } from "../../services/notes.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notes : any = [];

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.onLoadData();
  }

  onLoadData() {
    this.notesService.list().subscribe((resp: any) => {
      this.notes = resp;
    });
  }

}
