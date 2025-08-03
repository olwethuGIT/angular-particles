import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvTemplateComponent } from './cv-template/cv-template.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CvTemplateComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CvTemplateModule { }
