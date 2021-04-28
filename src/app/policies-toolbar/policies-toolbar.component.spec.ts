import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesToolbarComponent } from './policies-toolbar.component';

describe('PoliciesTopbarComponent', () => {
  let component: PoliciesToolbarComponent;
  let fixture: ComponentFixture<PoliciesToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliciesToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
