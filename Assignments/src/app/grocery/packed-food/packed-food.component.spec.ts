import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackedFoodComponent } from './packed-food.component';

describe('PackedFoodComponent', () => {
  let component: PackedFoodComponent;
  let fixture: ComponentFixture<PackedFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackedFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackedFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
