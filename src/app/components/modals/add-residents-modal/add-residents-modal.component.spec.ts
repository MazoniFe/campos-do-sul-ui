import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResidentsModalComponent } from './add-residents-modal.component';

describe('AddResidentsModalComponent', () => {
  let component: AddResidentsModalComponent;
  let fixture: ComponentFixture<AddResidentsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddResidentsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResidentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
