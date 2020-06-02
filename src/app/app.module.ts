import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, appRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UsersComponent } from './users/users.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UserModalComponent} from "./user-panel/user-modal.component";
import {ModalModule} from "./modal/modal.module";
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DetailsComponent } from './details/details.component';
import { AddPracownikaComponent } from './add-pracownika/add-pracownika.component';

@NgModule({
  declarations: [
    AppComponent,
    appRoutingComponents,
    LoginPageComponent,
    UserPanelComponent,
    UsersComponent,
    UserModalComponent,
    WelcomePageComponent,
    DetailsComponent,
    AddPracownikaComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ModalModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
