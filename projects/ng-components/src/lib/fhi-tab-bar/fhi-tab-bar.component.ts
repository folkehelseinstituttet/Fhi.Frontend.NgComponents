import { Component, Input } from '@angular/core';


@Component({
  selector: 'fhi-tab-bar',
  templateUrl: './fhi-tab-bar.component.html',
  styleUrls: ['./fhi-tab-bar.scss']
})
export class FhiTabBarComponent {

  @Input() links: any[] = [];

  constructor() { }

}
