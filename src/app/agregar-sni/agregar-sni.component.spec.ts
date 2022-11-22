import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSNIComponent } from './agregar-sni.component';

describe('AgregarSNIComponent', () => {
  let component: AgregarSNIComponent;
  let fixture: ComponentFixture<AgregarSNIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSNIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarSNIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
