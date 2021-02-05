import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { FhiAccordionComponent } from './fhi-accordion.component';
import { FhiAccordionModule } from './fhi-accordion.module';


export default {
  title: 'Fhi/fhi-accordion',
  component: FhiAccordionComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [FhiAccordionModule],
    }),
  ],
} as Meta;

const Template: Story<FhiAccordionComponent> = (args: FhiAccordionComponent) => ({
  component: FhiAccordionComponent,
  props: args,
});

export const normal = Template.bind({});
normal.args = {
  faAngleDown,
  items: [
    {id: 1, title: 'This is a title', content: 'acon ipsum dolor amet beef ribs chicken buffalo andouille pancetta burgdoggen turkey pig. Meatball tenderloin cow ground round hamburger.'},
    {id: 2, title: 'This is another title', content: 'Landjaeger leberkas flank, jowl cupim tongue chuck porchetta alcatra kevin pork tenderloin biltong chicken pork chop. Fatback cupim pig pork belly strip steak prosciutto cow porchetta kielbasa sirloin jowl salami.'},
  ],
};
