import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarObtencionGradosComponent } from './agregar-obtencion-grados.component';

describe('AgregarObtencionGradosComponent', () => {
  let component: AgregarObtencionGradosComponent;
  let fixture: ComponentFixture<AgregarObtencionGradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarObtencionGradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarObtencionGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
