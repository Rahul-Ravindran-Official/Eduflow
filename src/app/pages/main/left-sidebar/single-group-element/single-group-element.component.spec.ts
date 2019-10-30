import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGroupElementComponent } from './single-group-element.component';

describe('SingleGroupElementComponent', () => {
  let component: SingleGroupElementComponent;
  let fixture: ComponentFixture<SingleGroupElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleGroupElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGroupElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
