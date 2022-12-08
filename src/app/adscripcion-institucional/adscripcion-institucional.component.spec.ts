import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdscripcionInstitucionalComponent } from './adscripcion-institucional.component';

describe('AdscripcionInstitucionalComponent', () => {
  let component: AdscripcionInstitucionalComponent;
  let fixture: ComponentFixture<AdscripcionInstitucionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdscripcionInstitucionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdscripcionInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
