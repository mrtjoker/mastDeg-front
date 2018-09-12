import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DosageComponent } from './dosage.component';

describe('DosageComponent', () => {
  let component: DosageComponent;
  let fixture: ComponentFixture<DosageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
