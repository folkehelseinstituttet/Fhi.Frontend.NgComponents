import { Component, Input } from '@angular/core';

import { FhiMainMenuItem } from './fhi-main-menu-item.model';

@Component({
  selector: 'fhi-main-menu',
  templateUrl: './fhi-main-menu.component.html'
})
export class FhiMainMenuComponent {

  @Input() mainMenuItems!: FhiMainMenuItem[];

  @Input() faBars!: any;
  @Input() faTimes!: any;
  @Input() logo!: String;

  mainMenuIsOpen = false;

  mainMenuClose(): void {
    this.mainMenuIsOpen = false;
  }

  mainMenuToggle(): void {
    this.mainMenuIsOpen = !this.mainMenuIsOpen;
  }
}
