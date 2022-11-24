import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivulgacionCientificaComponent } from './divulgacion-cientifica.component';

describe('DivulgacionCientificaComponent', () => {
  let component: DivulgacionCientificaComponent;
  let fixture: ComponentFixture<DivulgacionCientificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivulgacionCientificaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivulgacionCientificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
