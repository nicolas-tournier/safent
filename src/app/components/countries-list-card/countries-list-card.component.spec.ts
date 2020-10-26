import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesListCardComponent } from './countries-list-card.component';

describe('CountriesListCardComponent', () => {
  let component: CountriesListCardComponent;
  let fixture: ComponentFixture<CountriesListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
