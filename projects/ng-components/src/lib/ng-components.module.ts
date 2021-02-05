import { NgModule } from '@angular/core';
import { NgComponentsComponent } from './ng-components.component';
import { FhiTabBarComponent } from './fhi-tab-bar/fhi-tab-bar.component';
import { FhiMainMenuComponent } from './fhi-main-menu/fhi-main-menu.component';



@NgModule({
  declarations: [NgComponentsComponent, FhiTabBarComponent, FhiMainMenuComponent],
  imports: [
  ],
  exports: [NgComponentsComponent]
})
export class NgComponentsModule { }
