import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementacionTecnologicaComponent } from './implementacion-tecnologica.component';

describe('ImplementacionTecnologicaComponent', () => {
  let component: ImplementacionTecnologicaComponent;
  let fixture: ComponentFixture<ImplementacionTecnologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplementacionTecnologicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImplementacionTecnologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
