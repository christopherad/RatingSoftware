import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDetailleComponent } from './note-detaille.component';

describe('NoteDetailleComponent', () => {
  let component: NoteDetailleComponent;
  let fixture: ComponentFixture<NoteDetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteDetailleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
