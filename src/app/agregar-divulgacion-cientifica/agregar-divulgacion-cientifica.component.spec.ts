import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDivulgacionCientificaComponent } from './agregar-divulgacion-cientifica.component';

describe('AgregarDivulgacionCientificaComponent', () => {
  let component: AgregarDivulgacionCientificaComponent;
  let fixture: ComponentFixture<AgregarDivulgacionCientificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarDivulgacionCientificaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarDivulgacionCientificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
