import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattletrackerComponent } from './battletracker.component';

describe('BattletrackerComponent', () => {
  let component: BattletrackerComponent;
  let fixture: ComponentFixture<BattletrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattletrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattletrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
