import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowComponent } from './tvshow.component';

describe('SeriesComponent', () => {
  let component: TvshowComponent;
  let fixture: ComponentFixture<TvshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
