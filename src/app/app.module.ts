import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

import { routes } from './app.routes';
import { reducers, metaReducers } from './reducers';
import { schema } from './db';
import { CustomRouterStateSerializer } from './shared/utils';

import { AppComponent } from './core/containers/app/app.component';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Book Store DevTools',
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    DBModule.provideDB(schema), // Memory DB, need to remove once we have dev env.
    CoreModule.forRoot(),
    AuthModule.forRoot()
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
