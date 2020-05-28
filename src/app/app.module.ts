import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, appRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UsersComponent } from './users/users.component';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from './modal';

@NgModule({
  declarations: [
    AppComponent,
    appRoutingComponents,
    LoginPageComponent,
    UserPanelComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
