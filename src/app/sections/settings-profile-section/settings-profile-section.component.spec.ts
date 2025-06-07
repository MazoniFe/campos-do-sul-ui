import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsProfileSectionComponent } from './settings-profile-section.component';

describe('SettingsProfileSectionComponent', () => {
  let component: SettingsProfileSectionComponent;
  let fixture: ComponentFixture<SettingsProfileSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsProfileSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsProfileSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
