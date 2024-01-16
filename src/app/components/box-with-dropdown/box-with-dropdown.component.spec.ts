import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWithDropdownComponent } from './box-with-dropdown.component';

describe('BoxWithDropdownComponent', () => {
  let component: BoxWithDropdownComponent;
  let fixture: ComponentFixture<BoxWithDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxWithDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxWithDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
