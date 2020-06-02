import { Component, OnInit } from '@angular/core';
import { Użytkownicy } from '../models/użytkownicy';
import { FormControl, Validators } from '@angular/forms';
import { UżytkownicyService } from '../services/użytkownicy.service';

@Component({
  selector: 'app-edytuj-uzytkownika',
  templateUrl: './edytuj-uzytkownika.component.html',
  styleUrls: ['./edytuj-uzytkownika.component.scss'],
})
export class EdytujUzytkownikaComponent implements OnInit {
  uzytkownikModel = new Użytkownicy(null, '', '', '');
  positionFormControl = new FormControl('', Validators.required);
  allUżytkownicy: Użytkownicy[];

  constructor(private uzytkownikService: UżytkownicyService) {}

  ngOnInit(): void {}

  getAllUżytkownicy() {
    this.uzytkownikService
      .getAllUżytkownicy()
      .subscribe((data) => (this.allUżytkownicy = data));
  }

  editUzyutkownika() {
    this.uzytkownikService.editUżytkownika(this.uzytkownikModel).subscribe();
  }
}
