import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'login/userpanel', component: UserPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const appRoutingComponents = [
  NavbarComponent,
  BannerComponent,
  FooterComponent,
  LoginPageComponent,
];
