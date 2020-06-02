import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Pracownicy } from '../models/pracownicy';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  pracownikModel = new Pracownicy(null, '', '');

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  addPracownika() {
    this.loginService.addPracownika(this.pracownikModel).subscribe();
  }
}
