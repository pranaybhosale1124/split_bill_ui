import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-owe-to',
  templateUrl: './owe-to.component.html',
  styleUrls: ['./owe-to.component.scss']
})
export class OweToComponent {
  @Input() expenses: any;
}
