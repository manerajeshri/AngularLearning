import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demopost1Component } from './demopost1.component';

describe('Demopost1Component', () => {
  let component: Demopost1Component;
  let fixture: ComponentFixture<Demopost1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demopost1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demopost1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
