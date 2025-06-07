import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentsPageComponent } from './residents-page.component';

describe('ResidentsPageComponent', () => {
  let component: ResidentsPageComponent;
  let fixture: ComponentFixture<ResidentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
