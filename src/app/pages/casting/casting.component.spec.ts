import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastingComponent } from './casting.component';

describe('CastingComponent', () => {
  let component: CastingComponent;
  let fixture: ComponentFixture<CastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
