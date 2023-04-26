import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrodiffSearchResultsComponent } from './grodiff-search-results.component';

describe('GrodiffSearchResultsComponent', () => {
  let component: GrodiffSearchResultsComponent;
  let fixture: ComponentFixture<GrodiffSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrodiffSearchResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrodiffSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
