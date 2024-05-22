import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-box-with-mutex-checkboxes',
  templateUrl: './box-with-mutex-checkboxes.component.html',
  styleUrls: ['./box-with-mutex-checkboxes.component.css'],
})
export class BoxWithMutexCheckboxesComponent {
  constructor() {}
  @Output() changeSelection = new EventEmitter();
  @Input() tooltipText: string;
  @Input() header: string;
  @Input() topOptionText: string;
  @Input() middleOptionText: string;
  @Input() topOptionId: string;
  @Input() middleOptionId: string;
  @Input() bottomOptionId: string;

  @ViewChild('topInput') topInput: ElementRef<HTMLInputElement>;
  @ViewChild('topInputText') topInputText: ElementRef<HTMLSpanElement>;
  @ViewChild('middleInput') middleInput: ElementRef<HTMLInputElement>;
  @ViewChild('middleInputText') middleInputText: ElementRef<HTMLSpanElement>;
  @ViewChild('bottomInput') bottomInput: ElementRef<HTMLInputElement>;
  @ViewChild('bottomInputText') bottomInputText: ElementRef<HTMLSpanElement>;

  //This governs the look of the boxes by leveraging CSS
  onChange(event: any) {
    switch (event.target.id) {
      case this.topOptionId:
        this.middleInputText.nativeElement.classList.add('greyed-out-text');
        this.topInputText.nativeElement.classList.remove('greyed-out-text');
        break;
      case this.middleOptionId:
        this.topInputText.nativeElement.classList.add('greyed-out-text');
        this.middleInputText.nativeElement.classList.remove('greyed-out-text');
        break;
      case this.bottomOptionId:
        this.topInputText.nativeElement.classList.remove('greyed-out-text');
        this.middleInputText.nativeElement.classList.remove('greyed-out-text');
        break;
    }
    this.changeSelection.emit(event);
  }
}
