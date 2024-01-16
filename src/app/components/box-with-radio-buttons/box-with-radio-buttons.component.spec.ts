import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWithRadioButtonsComponent } from './box-with-radio-buttons.component';

describe('BoxWithRadioButtonsComponent', () => {
  let component: BoxWithRadioButtonsComponent;
  let fixture: ComponentFixture<BoxWithRadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxWithRadioButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxWithRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
