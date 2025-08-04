import { Component, Input } from '@angular/core';
import { WorkExperience } from '../../models/work-experience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  @Input() workExperiences: WorkExperience[] = [];
  @Input() title: string = '';

}
