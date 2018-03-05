import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthEffects } from './effects/auth.effect';
import { reducers } from './reducers';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';

const COMPONENTS = [LoginPageComponent, LoginFormComponent];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [AuthService, AuthGuard],
    };
  }
}

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([{ path: 'login', component: LoginPageComponent }]),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class RootAuthModule { }
