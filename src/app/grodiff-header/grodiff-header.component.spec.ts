import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrodiffHeaderComponent } from './grodiff-header.component';

describe('GrodiffHeaderComponent', () => {
  let component: GrodiffHeaderComponent;
  let fixture: ComponentFixture<GrodiffHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrodiffHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrodiffHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
