import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() sidenavToggleBtn!: Boolean;
  @Output() changeSideNavState: EventEmitter<any> = new EventEmitter<any>();

  emitEvent() {
    this.changeSideNavState.emit();
  }

}
