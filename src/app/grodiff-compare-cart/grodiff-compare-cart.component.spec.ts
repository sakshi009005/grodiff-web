import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrodiffCompareCartComponent } from './grodiff-compare-cart.component';

describe('GrodiffCompareCartComponent', () => {
  let component: GrodiffCompareCartComponent;
  let fixture: ComponentFixture<GrodiffCompareCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrodiffCompareCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrodiffCompareCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
