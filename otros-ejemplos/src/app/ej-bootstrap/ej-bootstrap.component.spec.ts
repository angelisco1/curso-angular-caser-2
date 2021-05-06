import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjBootstrapComponent } from './ej-bootstrap.component';

describe('EjBootstrapComponent', () => {
  let component: EjBootstrapComponent;
  let fixture: ComponentFixture<EjBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjBootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
