import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  readonly url = 'http://localhost:8080/';

  constructor(public htpp: HttpClient) {}
}
