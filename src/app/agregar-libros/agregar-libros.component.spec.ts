import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarLibrosComponent } from './agregar-libros.component';

describe('AgregarLibrosComponent', () => {
  let component: AgregarLibrosComponent;
  let fixture: ComponentFixture<AgregarLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarLibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
