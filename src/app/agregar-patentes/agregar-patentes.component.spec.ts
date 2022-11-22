import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPatentesComponent } from './agregar-patentes.component';

describe('AgregarPatentesComponent', () => {
  let component: AgregarPatentesComponent;
  let fixture: ComponentFixture<AgregarPatentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPatentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPatentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
