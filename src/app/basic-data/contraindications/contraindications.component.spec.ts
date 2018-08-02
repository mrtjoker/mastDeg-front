import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraindicationsComponent } from './contraindications.component';

describe('ContraindicationsComponent', () => {
  let component: ContraindicationsComponent;
  let fixture: ComponentFixture<ContraindicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContraindicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraindicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
