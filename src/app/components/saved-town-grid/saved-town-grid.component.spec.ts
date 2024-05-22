import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedTownGridComponent } from './saved-town-grid.component';

describe('SavedTownGridComponent', () => {
  let component: SavedTownGridComponent;
  let fixture: ComponentFixture<SavedTownGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedTownGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedTownGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
