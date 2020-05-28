import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, appRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { PayInModalComponent } from './pay-in-modal/pay-in-modal.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    appRoutingComponents,
    LoginPageComponent,
    UserPanelComponent,
    PayInModalComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
