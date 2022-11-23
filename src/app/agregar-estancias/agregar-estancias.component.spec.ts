import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEstanciasComponent } from './agregar-estancias.component';

describe('AgregarEstanciasComponent', () => {
  let component: AgregarEstanciasComponent;
  let fixture: ComponentFixture<AgregarEstanciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEstanciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEstanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
