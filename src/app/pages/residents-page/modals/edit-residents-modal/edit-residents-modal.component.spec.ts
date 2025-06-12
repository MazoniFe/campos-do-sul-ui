import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResidentsModalComponent } from './edit-residents-modal.component';

describe('EditResidentsModalComponent', () => {
  let component: EditResidentsModalComponent;
  let fixture: ComponentFixture<EditResidentsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditResidentsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditResidentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
