import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsFDAComponent } from './us-fda.component';

describe('UsFDAComponent', () => {
  let component: UsFDAComponent;
  let fixture: ComponentFixture<UsFDAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsFDAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsFDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
