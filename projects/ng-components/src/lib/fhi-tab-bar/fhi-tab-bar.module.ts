import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FhiTabBarComponent } from './fhi-tab-bar.component';


@NgModule({
  declarations: [FhiTabBarComponent],
  exports: [FhiTabBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ]
})
export class FhiTabBarModule { }
