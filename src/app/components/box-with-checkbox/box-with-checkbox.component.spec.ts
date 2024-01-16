import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWithCheckboxComponent } from './box-with-checkbox.component';

describe('BoxWithCheckboxComponent', () => {
  let component: BoxWithCheckboxComponent;
  let fixture: ComponentFixture<BoxWithCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxWithCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxWithCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
