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

@NgModule({
  declarations: [
    AppComponent,
    appRoutingComponents,
    LoginPageComponent,
    UserPanelComponent,
    UsersComponent,
    UserModalComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ModalModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
