import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBasicDataComponent } from './all-basic-data.component';

describe('AllBasicDataComponent', () => {
  let component: AllBasicDataComponent;
  let fixture: ComponentFixture<AllBasicDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBasicDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBasicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
