import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvTemplateComponent } from './cv-template/cv-template/cv-template.component';

const routes: Routes = [
  {
    path: '**',
    component: CvTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
