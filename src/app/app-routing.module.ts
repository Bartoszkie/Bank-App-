import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UsersComponent } from './users/users.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'login/users/userpanel', component: UserPanelComponent },
  { path: 'login/users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const appRoutingComponents = [
  NavbarComponent,
  BannerComponent,
  DetailsComponent,
  FooterComponent,
  LoginPageComponent,
];
