import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCondominiumSectionComponent } from './settings-condominium-section.component';

describe('SettingsCondominiumSectionComponent', () => {
  let component: SettingsCondominiumSectionComponent;
  let fixture: ComponentFixture<SettingsCondominiumSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsCondominiumSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsCondominiumSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
