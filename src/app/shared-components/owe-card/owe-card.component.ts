import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-owe-card',
  templateUrl: './owe-card.component.html',
  styleUrls: ['./owe-card.component.scss']
})
export class OweCardComponent {
  @Input() expense: any;
  
}
