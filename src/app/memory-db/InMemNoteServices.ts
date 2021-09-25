import { InMemoryDbService } from "angular-in-memory-web-api";
import { INote } from "../models/note.note";
import { IUser } from "../models/user.user";

export class InMemNoteServices implements InMemoryDbService {

  createDb() {
    let notes : INote[] = [
      {
        id: 1,
        title: 'Composer',
        subtitle: 'Creacion de paquetes'
      },
      {
        id: 2,
        title: 'Laravel',
        subtitle: 'Creando API Res'
      },
      {
        id: 3,
        title: 'Angular',
        subtitle: 'Implementando State Manager'
      },
      {
        id: 4,
        title: 'Windows',
        subtitle: 'Install windows 11 2021'
      },
      {
        id: 5,
        title: 'Windows XP',
        subtitle: 'Compartir impresora'
      }
    ];
    let users: IUser[] = [
      {
        id: 1,
        username: 'lopezarizamiguel@gmail.com',
        password: 'Mla1043605421',
        name: 'Miguel Lopez Ariza'
      },
      {
        id: 2,
        username: 'mlopez@gmail.com',
        password: '1043605421',
        name: 'Leonardo Lopez Ariza'
      }
    ];
    return { notes, users };
  }

}
