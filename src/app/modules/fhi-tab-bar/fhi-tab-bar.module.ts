import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FhiTabBarComponent } from './fhi-tab-bar.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [FhiTabBarComponent],
  exports: [FhiTabBarComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class FhiTabBarModule { }
