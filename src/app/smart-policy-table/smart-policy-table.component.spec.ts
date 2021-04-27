import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPolicyTableComponent } from './smart-policy-table.component';

describe('SmartPolicyTableComponent', () => {
  let component: SmartPolicyTableComponent;
  let fixture: ComponentFixture<SmartPolicyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartPolicyTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPolicyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
