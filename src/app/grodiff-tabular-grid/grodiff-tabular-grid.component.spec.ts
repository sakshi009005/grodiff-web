import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrodiffTabularGridComponent } from './grodiff-tabular-grid.component';

describe('GrodiffTabularGridComponent', () => {
  let component: GrodiffTabularGridComponent;
  let fixture: ComponentFixture<GrodiffTabularGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrodiffTabularGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrodiffTabularGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
