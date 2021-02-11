import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FhiAccordionComponent } from './fhi-accordion.component';


@NgModule({
  declarations: [FhiAccordionComponent],
  exports: [FhiAccordionComponent],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
  ]
})
export class FhiAccordionModule { }
