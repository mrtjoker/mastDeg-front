import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaiFDAComponent } from './thai-fda.component';

describe('ThaiFDAComponent', () => {
  let component: ThaiFDAComponent;
  let fixture: ComponentFixture<ThaiFDAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThaiFDAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaiFDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
