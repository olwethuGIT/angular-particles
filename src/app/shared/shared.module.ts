import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SkillsExpertiseComponent } from './components/skills-expertise/skills-expertise.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';

@NgModule({
  declarations: [ButtonComponent, SkillsExpertiseComponent, WorkExperienceComponent, EducationComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, SkillsExpertiseComponent, WorkExperienceComponent, EducationComponent],
})
export class SharedModule {}
