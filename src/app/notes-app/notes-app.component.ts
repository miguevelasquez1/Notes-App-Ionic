import { Component, OnInit } from 'angular-ts-decorators';
import {} from 'angular-ts-decorators/types/';
import { Note } from '../models/note';



@Component({
  selector: 'notes-app',
  templateUrl: 'app/notes-app/notes-app.component.html'
})
export class NotesAppComponent implements OnInit {

  newNote: Note = {};
  notes = [];
  uId = 1;


  /*@ngInject*/
  constructor() {}

  ngOnInit() {}

  saveNote() {
    if (this.newNote.id == null) {
        this.uId = this.uId + 1;
        this.newNote.id = this.uId;
        this.notes.push(this.newNote);
    } else {
        for (const i in this.notes) {
            if (this.notes[i].id === this.newNote.id) {
                this.notes[i] = this.newNote;
            }
        }
    }

    this.newNote = {};
  }

  edit(id) {
    for (const i in this.notes) {
        if (this.notes[i].id === id) {
            // this.newNote = angular.copy($scope.notes[i]);
            console.log('edit');
        }
    }
  }

  delete(id) {
    for (const note in this.notes) {
        if (this.notes[note].id === id) {
            // this.notes.splice(note, 1);
            console.log('delete');
            this.newNote = {};
        }
    }
  }

}
