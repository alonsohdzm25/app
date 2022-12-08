import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarGradosAcademicosComponent } from './agregar-grados-academicos.component';

describe('AgregarGradosAcademicosComponent', () => {
  let component: AgregarGradosAcademicosComponent;
  let fixture: ComponentFixture<AgregarGradosAcademicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarGradosAcademicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarGradosAcademicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
