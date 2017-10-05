import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HR01010WComponent } from './HR01010W.component';

describe('DemoComponent', () => {
  let component: HR01010WComponent;
  let fixture: ComponentFixture<HR01010WComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HR01010WComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HR01010WComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
