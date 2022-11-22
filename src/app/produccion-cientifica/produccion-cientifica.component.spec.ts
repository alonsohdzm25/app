import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionCientificaComponent } from './produccion-cientifica.component';

describe('ProduccionCientificaComponent', () => {
  let component: ProduccionCientificaComponent;
  let fixture: ComponentFixture<ProduccionCientificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduccionCientificaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduccionCientificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
