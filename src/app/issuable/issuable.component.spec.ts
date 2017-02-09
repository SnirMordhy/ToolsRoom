/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IssuableComponent } from './issuable.component';

describe('IssuableComponent', () => {
  let component: IssuableComponent;
  let fixture: ComponentFixture<IssuableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
