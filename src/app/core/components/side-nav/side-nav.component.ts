import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as fromAuth from '../../../auth/reducers';

@Component({
  selector: 'ngrx-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Output() openMenu = new EventEmitter();
  @Output() closeMenu = new EventEmitter();
  @Input() open = false;

  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  }

  ngOnInit() { }

  mouseEnter() {
    this.openMenu.emit();
  }

  mouseLeave() {
    this.closeMenu.emit();
  }

}
