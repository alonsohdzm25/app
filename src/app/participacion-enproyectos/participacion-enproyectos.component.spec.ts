import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacionEnproyectosComponent } from './participacion-enproyectos.component';

describe('ParticipacionEnproyectosComponent', () => {
  let component: ParticipacionEnproyectosComponent;
  let fixture: ComponentFixture<ParticipacionEnproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipacionEnproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipacionEnproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
