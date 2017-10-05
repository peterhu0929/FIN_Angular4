import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hr02010WEditComponent } from './hr02010w-edit.component';

describe('Hr02010wEditComponent', () => {
  let component: Hr02010WEditComponent;
  let fixture: ComponentFixture<Hr02010WEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hr02010WEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hr02010WEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
