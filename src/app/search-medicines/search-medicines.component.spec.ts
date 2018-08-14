import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMedicinesComponent } from './search-medicines.component';

describe('SearchMedicinesComponent', () => {
  let component: SearchMedicinesComponent;
  let fixture: ComponentFixture<SearchMedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
