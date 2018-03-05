import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngrx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() openMenu = new EventEmitter();
  @Output() closeMenu = new EventEmitter();
  @Input() open = false;

  constructor() { }

  ngOnInit() { }

  toggle() {
    if (!this.open) {
      this.openMenu.emit();
    } else {
      this.closeMenu.emit();
    }
  }

}
