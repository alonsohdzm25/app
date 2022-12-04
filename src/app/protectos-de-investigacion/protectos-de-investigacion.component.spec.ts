import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectosDeInvestigacionComponent } from './protectos-de-investigacion.component';

describe('ProtectosDeInvestigacionComponent', () => {
  let component: ProtectosDeInvestigacionComponent;
  let fixture: ComponentFixture<ProtectosDeInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectosDeInvestigacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectosDeInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
