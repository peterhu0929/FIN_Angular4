import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HR03010WComponent } from './HR03010W.component';

describe('HR03010WComponent', () => {
  let component: HR03010WComponent;
  let fixture: ComponentFixture<HR03010WComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HR03010WComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HR03010WComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
