import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-owe-me',
  templateUrl: './owe-me.component.html',
  styleUrls: ['./owe-me.component.scss']
})
export class OweMeComponent {

  @Input() expenses: any;
  
}
