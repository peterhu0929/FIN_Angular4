import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HR02010WComponent } from './HR02010W.component';

describe('DemoComponent', () => {
  let component: HR02010WComponent;
  let fixture: ComponentFixture<HR02010WComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HR02010WComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HR02010WComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
