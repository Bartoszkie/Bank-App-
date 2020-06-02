import { Component, OnInit } from '@angular/core';
import { Użytkownicy } from '../models/użytkownicy';
import { FormControl, Validators } from '@angular/forms';
import { UżytkownicyService } from '../services/użytkownicy.service';

@Component({
  selector: 'app-dodajuzytkownika',
  templateUrl: './dodajuzytkownika.component.html',
  styleUrls: ['./dodajuzytkownika.component.scss'],
})
export class DodajuzytkownikaComponent implements OnInit {
  uzytkownikModel = new Użytkownicy(null, '', '', '');
  positionFormControl = new FormControl('', Validators.required);

  constructor(private uzytkownikService: UżytkownicyService) {}

  ngOnInit(): void {}

  addUżytkownika() {
    this.uzytkownikService.addUżytkownika(this.uzytkownikModel).subscribe();
  }
}
