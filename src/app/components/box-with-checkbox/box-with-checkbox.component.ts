import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box-with-checkbox',
  templateUrl: './box-with-checkbox.component.html',
  styleUrls: ['./box-with-checkbox.component.css'],
})
export class BoxWithCheckboxComponent {
  constructor() {}
  @Output() eventToggle = new EventEmitter();
  @Input() items: string[];
  @Input() tooltipText: string;
  @Input() header: string;
  @Input() idProperty: string;

  onChange(event: any) {
    this.eventToggle.emit(event);
  }
}
