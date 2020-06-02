import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Pracownicy } from '../models/pracownicy';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-add-pracownika',
  templateUrl: './add-pracownika.component.html',
  styleUrls: ['./add-pracownika.component.scss'],
})
export class AddPracownikaComponent implements OnInit {
  pracownikModel = new Pracownicy(null, '', '');
  positionFormControl = new FormControl('', Validators.required);

  constructor(private pracownicyService: LoginService) {}

  ngOnInit(): void {}

  addPracownika() {
    this.pracownicyService.addPracownika(this.pracownikModel).subscribe();
  }
}
