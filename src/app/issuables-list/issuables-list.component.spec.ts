/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IssuablesListComponent } from './issuables-list.component';

describe('IssuablesListComponent', () => {
  let component: IssuablesListComponent;
  let fixture: ComponentFixture<IssuablesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuablesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuablesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
