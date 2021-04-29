import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSmartPolicyDialogComponent } from './new-smart-policy-dialog.component';

describe('NewSmartPolicyDialogComponent', () => {
  let component: NewSmartPolicyDialogComponent;
  let fixture: ComponentFixture<NewSmartPolicyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSmartPolicyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSmartPolicyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
