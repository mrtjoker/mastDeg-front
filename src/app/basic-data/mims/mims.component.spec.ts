import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MimsComponent } from './mims.component';

describe('MimsComponent', () => {
  let component: MimsComponent;
  let fixture: ComponentFixture<MimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
