import { moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Story, Meta } from '@storybook/angular';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { FhiMainMenuComponent } from './fhi-main-menu.component';
import { FhiMainMenuModule } from './fhi-main-menu.module';


export default {
  title: 'Fhi/fhi-main-menu',
  component: FhiMainMenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [FhiMainMenuModule, RouterTestingModule],
    }),
  ],
} as Meta;

const Template: Story<FhiMainMenuComponent> = (args: FhiMainMenuComponent) => ({
  component: FhiMainMenuComponent,
  props: args,
});

export const normal = Template.bind({});
normal.args = {
  mainMenuItems: [
    { name: 'Side1', routerLink: 'link1'},
    { name: 'Side2', routerLink: 'link2'},
    { name: 'Side3', routerLink: 'link3'}
  ],
  faBars,
  faTimes,
  logo: './assets/fhi-felles/logos/logo-norsk-kun-forkortelse-hvit-uten-luft-rundt.svg'
};
