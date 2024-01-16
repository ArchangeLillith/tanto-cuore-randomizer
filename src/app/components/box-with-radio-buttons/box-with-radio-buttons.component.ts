import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box-with-radio-buttons',
  templateUrl: './box-with-radio-buttons.component.html',
  styleUrls: ['./box-with-radio-buttons.component.css'],
})
export class BoxWithRadioButtonsComponent {
  constructor() {}
  @Output() eventToggle = new EventEmitter();
  @Input() items: string[];
  @Input() tooltipText: string;
  @Input() header: string;
  @Input() idProperty: string;
  @Input() selection: string[];

  onChange(event: any) {
    this.eventToggle.emit(event);
  }
}
