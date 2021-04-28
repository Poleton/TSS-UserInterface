import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPolicyDialogComponent } from './new-policy-dialog.component';

describe('NewPolicyDialogComponent', () => {
  let component: NewPolicyDialogComponent;
  let fixture: ComponentFixture<NewPolicyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPolicyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPolicyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
