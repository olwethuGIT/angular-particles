import { Component, Input } from '@angular/core';
import { SkillsExpertise } from '../../models/skills-expertise';

@Component({
  selector: 'app-skills-expertise',
  templateUrl: './skills-expertise.component.html',
  styleUrls: ['./skills-expertise.component.css'],
})
export class SkillsExpertiseComponent {
  @Input() skills: SkillsExpertise[] = [];
  @Input() title: string = '';
}
