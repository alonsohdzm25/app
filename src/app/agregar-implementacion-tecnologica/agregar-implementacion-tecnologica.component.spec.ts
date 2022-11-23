import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarImplementacionTecnologicaComponent } from './agregar-implementacion-tecnologica.component';

describe('AgregarImplementacionTecnologicaComponent', () => {
  let component: AgregarImplementacionTecnologicaComponent;
  let fixture: ComponentFixture<AgregarImplementacionTecnologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarImplementacionTecnologicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarImplementacionTecnologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
