import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output() btnClick = new EventEmitter();
  @Input() text: string;

  onClick() {
    this.btnClick.emit();
  }
}
