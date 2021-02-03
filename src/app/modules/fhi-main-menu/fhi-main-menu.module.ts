import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FhiMainMenuComponent } from './fhi-main-menu.component';


@NgModule({
  declarations: [FhiMainMenuComponent],
  exports: [FhiMainMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FontAwesomeModule,
  ]
})
export class FhiMainMenuModule { }
