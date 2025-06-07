import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CondominioFormComponent } from "../../sections/settings-condominium-section/settings-condominium-section.component";
import { SettingsProfileSectionComponent } from "../../sections/settings-profile-section/settings-profile-section.component";

interface ISettingsSection {
  index: number;
  isSelected: boolean;
}

@Component({
  selector: 'app-settings-page',
  imports: [CommonModule, CondominioFormComponent, SettingsProfileSectionComponent],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css'
})

export class SettingsPageComponent {
    sections: ISettingsSection[] = [
    { index: 0, isSelected: true },
    { index: 1, isSelected: false },
    { index: 2, isSelected: false },
    { index: 3, isSelected: false }
  ];
  currentSection: ISettingsSection = this.sections[0];

  onSelect(index: number) {
    this.sections.forEach(item => item.isSelected = false);
    this.sections[index].isSelected = true;
    this.currentSection = this.sections[index];
  }
}
