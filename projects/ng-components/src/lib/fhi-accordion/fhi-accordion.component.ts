import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'fhi-accordion',
  templateUrl: './fhi-accordion.component.html',
  styleUrls: ['./fhi-accordion.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FhiAccordionComponent {

  @Input() items: any[] = [];

  @Input() faAngleDown!: any;
  @Input() headerTemplate!: TemplateRef<any>;
  @Input() contentTemplate!: TemplateRef<any>;

  @Input() panelChange: Function = () => {};
  @Input() identifyItem: Function = (item: any): string => `Item-${item.id}`;

  constructor() { }

}
