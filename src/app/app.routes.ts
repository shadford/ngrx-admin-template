import { Routes } from '@angular/router';
import { AuthGuard } from './auth/services/auth-guard.service';
import { PageNotFoundComponent } from './core/containers/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];
