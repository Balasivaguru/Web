import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollitemComponent } from './scrollitem.component';

describe('ScrollitemComponent', () => {
  let component: ScrollitemComponent;
  let fixture: ComponentFixture<ScrollitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
