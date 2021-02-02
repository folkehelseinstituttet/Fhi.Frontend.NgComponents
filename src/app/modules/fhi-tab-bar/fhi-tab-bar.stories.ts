import { moduleMetadata } from '@storybook/angular';
import { CommonModule,  } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Story, Meta } from '@storybook/angular';

import { SharedModule } from '../../shared/shared.module';

import { FhiTabBarComponent } from './fhi-tab-bar.component';


export default {
  title: 'Fhi/Tab-bar',
  component: FhiTabBarComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, SharedModule, RouterTestingModule],
    }),
  ],
} as Meta;

const Template: Story<FhiTabBarComponent> = (args: FhiTabBarComponent) => ({
  component: FhiTabBarComponent,
  props: args,
});

export const normal = Template.bind({});
normal.args = {
  links: [
    { title: 'Innsynssaker', routerLink: 'link1'},
    { title: 'Manuell innsynsbehandling', routerLink: 'link2'}
  ],
};
