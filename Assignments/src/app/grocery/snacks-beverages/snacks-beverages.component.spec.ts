import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnacksBeveragesComponent } from './snacks-beverages.component';

describe('SnacksBeveragesComponent', () => {
  let component: SnacksBeveragesComponent;
  let fixture: ComponentFixture<SnacksBeveragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnacksBeveragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnacksBeveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
