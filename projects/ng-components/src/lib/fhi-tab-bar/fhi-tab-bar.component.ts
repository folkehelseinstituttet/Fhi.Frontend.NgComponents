import { Component, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'fhi-tab-bar',
  templateUrl: './fhi-tab-bar.component.html',
  styleUrls: ['./fhi-tab-bar.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FhiTabBarComponent {

  @Input() links: any[] = [];

  constructor() { }

}
