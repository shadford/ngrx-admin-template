import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Authenticate } from '../../models/authenticate';
import * as fromAuth from '../../reducers';
import * as Auth from '../../actions/auth';

@Component({
  selector: 'ngrx-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
  error$ = this.store.pipe(select(fromAuth.getLoginPageError));

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {}

  onSubmit($event: Authenticate) {
    this.store.dispatch(new Auth.Login($event));
  }

}
