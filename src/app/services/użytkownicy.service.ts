import { Injectable } from '@angular/core';
import { ConnectionService } from './connection.service';
import { Użytkownicy } from '../models/użytkownicy';

@Injectable({
  providedIn: 'root',
})
export class UżytkownicyService {
  constructor(private conn: ConnectionService) {}

  getAllUżytkownicy() {
    return this.conn.htpp.get<Użytkownicy[]>(this.conn.url + 'login/users');
  }

  addUżytkownika(użytkownicy: Użytkownicy) {
    return this.conn.htpp.post<Użytkownicy>(
      this.conn.url + 'login/users',
      użytkownicy
    );
  }

  editUżytkownika(użytkownicy: Użytkownicy) {
    return this.conn.htpp.put<Użytkownicy>(
      this.conn.url + `login/users/${użytkownicy.id}`,
      użytkownicy
    );
  }

  deleteUżytkownika(id: Number) {
    return this.conn.htpp.delete(this.conn.url + `/login/users${id}`, {
      responseType: 'text',
    });
  }
}
