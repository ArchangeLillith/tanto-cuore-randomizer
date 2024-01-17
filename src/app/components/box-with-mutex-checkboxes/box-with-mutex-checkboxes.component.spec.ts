import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWithMutexCheckboxesComponent } from './box-with-mutex-checkboxes.component';

describe('BoxWithMutexCheckboxesComponent', () => {
  let component: BoxWithMutexCheckboxesComponent;
  let fixture: ComponentFixture<BoxWithMutexCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxWithMutexCheckboxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxWithMutexCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
