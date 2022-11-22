import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNIComponent } from './sni.component';

describe('SNIComponent', () => {
  let component: SNIComponent;
  let fixture: ComponentFixture<SNIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SNIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SNIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
