import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box-with-dropdown',
  templateUrl: './box-with-dropdown.component.html',
  styleUrls: ['./box-with-dropdown.component.css'],
})
export class BoxWithDropdownComponent {
  constructor() {}
  @Output() dropdownChange = new EventEmitter();
  @Input() items: string[];
  @Input() tooltipText: string;
  @Input() header: string;
  @Input() idProperty: string;
  @Input() numbers: number[] = [...Array(3).keys()];

  onChange(event: any) {
    this.dropdownChange.emit(event);
  }
}
