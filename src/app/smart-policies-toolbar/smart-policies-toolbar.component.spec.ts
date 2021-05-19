import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPoliciesToolbarComponent } from './smart-policies-toolbar.component';

describe('SmartPoliciesToolbarComponent', () => {
  let component: SmartPoliciesToolbarComponent;
  let fixture: ComponentFixture<SmartPoliciesToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartPoliciesToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPoliciesToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
