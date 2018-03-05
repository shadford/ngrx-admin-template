import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { AppComponent } from './containers/app/app.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const COMPONENTS = [
  AppComponent,
  PageNotFoundComponent,
  LayoutComponent,
  NavItemComponent,
  HeaderComponent,
  HeaderLogoComponent,
  SideNavComponent,
  UserProfileComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
