import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demopostdetails1Component } from './demopostdetails1.component';

describe('Demopostdetails1Component', () => {
  let component: Demopostdetails1Component;
  let fixture: ComponentFixture<Demopostdetails1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demopostdetails1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demopostdetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
