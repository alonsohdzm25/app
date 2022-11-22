import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoautorialibrosComponent } from './coautorialibros.component';

describe('CoautorialibrosComponent', () => {
  let component: CoautorialibrosComponent;
  let fixture: ComponentFixture<CoautorialibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoautorialibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoautorialibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
