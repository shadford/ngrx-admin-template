import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { User } from '../../../auth/models/user';

import * as fromRoot from '../../../reducers';
import * as fromAuth from '../../../auth/reducers';
import * as layout from '../../actions/layout';
import * as Auth from '../../../auth/actions/auth';

@Component({
  selector: 'ngrx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;
  loggedInUser$: Observable<User>;

  constructor(private store: Store<fromRoot.State>) {
    this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav));
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
    this.loggedInUser$ = this.store.pipe(select(fromAuth.getUser));
  }

  ngOnInit() { }

  closeSidenav() {
    this.store.dispatch(new layout.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenav());
  }

  logout() {
    this.closeSidenav();
    this.store.dispatch(new Auth.Logout());
  }
}
