import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationPackComponent } from './presentation-pack.component';

describe('PresentationPackComponent', () => {
  let component: PresentationPackComponent;
  let fixture: ComponentFixture<PresentationPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
