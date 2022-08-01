import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForLearnComponent } from './ng-for-learn.component';

describe('NgForLearnComponent', () => {
  let component: NgForLearnComponent;
  let fixture: ComponentFixture<NgForLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForLearnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
