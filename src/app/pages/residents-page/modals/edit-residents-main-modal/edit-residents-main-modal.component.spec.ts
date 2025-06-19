import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResidentsMainModalComponent } from './edit-residents-main-modal.component';

describe('EditResidentsMainModalComponent', () => {
  let component: EditResidentsMainModalComponent;
  let fixture: ComponentFixture<EditResidentsMainModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditResidentsMainModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditResidentsMainModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
