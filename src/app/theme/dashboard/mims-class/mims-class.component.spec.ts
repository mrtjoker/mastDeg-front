import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MimsClassComponent } from './mims-class.component';

describe('MimsClassComponent', () => {
  let component: MimsClassComponent;
  let fixture: ComponentFixture<MimsClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MimsClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MimsClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
