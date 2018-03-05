import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../auth/models/user';

@Component({
  selector: 'ngrx-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() { console.log('USER::: ' + JSON.stringify(this.user)); }

}
