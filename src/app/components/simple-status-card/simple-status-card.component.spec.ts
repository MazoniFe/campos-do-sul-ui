import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleStatusCardComponent } from './simple-status-card.component';

describe('SimpleStatusCardComponent', () => {
  let component: SimpleStatusCardComponent;
  let fixture: ComponentFixture<SimpleStatusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleStatusCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
