import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NPM downloaded packages
import { NgParticlesModule } from 'ng-particles';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { CvTemplateModule } from './cv-template/cv-template.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    RouterModule,
    SharedModule,
    CvTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
