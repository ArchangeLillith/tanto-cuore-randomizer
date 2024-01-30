import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardForTownComponent } from './card-for-town.component';

describe('CardForTownComponent', () => {
  let component: CardForTownComponent;
  let fixture: ComponentFixture<CardForTownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardForTownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardForTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
