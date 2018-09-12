import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsMedicinesComponent } from './informations-medicines.component';

describe('InformationsMedicinesComponent', () => {
  let component: InformationsMedicinesComponent;
  let fixture: ComponentFixture<InformationsMedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationsMedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
