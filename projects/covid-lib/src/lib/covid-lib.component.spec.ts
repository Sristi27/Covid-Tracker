import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidLibComponent } from './covid-lib.component';

describe('CovidLibComponent', () => {
  let component: CovidLibComponent;
  let fixture: ComponentFixture<CovidLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
