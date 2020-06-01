import { Injectable } from '@angular/core';
import { Pracownicy } from '../models/pracownicy';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private conn: ConnectionService) {}

  addPracownika(pracownik: Pracownicy) {
    return this.conn.htpp.post<Pracownicy>(this.conn.url + '/login', pracownik);
  }
}
