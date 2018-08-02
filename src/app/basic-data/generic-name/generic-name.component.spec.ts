import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericNameComponent } from './generic-name.component';

describe('GenericNameComponent', () => {
  let component: GenericNameComponent;
  let fixture: ComponentFixture<GenericNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
