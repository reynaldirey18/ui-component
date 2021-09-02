import {Meta, Story} from '@storybook/vue3';
import VPagination from './VPagination.vue';

export default {
  title: 'Components/Pagination',
  component: VPagination,
  argTypes: {},
  args: {
    totalItems: 30,
    itemsPerPage: 10,
    large: false,
    small: false,
    showFirst: true,
    showPrevious: true,
    showNext: true,
    showLast: true,
    showNumber: true,
    siblingCount: 1,
    boundaryCount: 1,
    simple: false,
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    'V-component': VPagination,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<V-component v-bind="args">{{ args.label }}</V-component>`,
});

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {small: true};

export const Large = Template.bind({});
Large.args = {large: true};

export const Simple = Template.bind({});
Simple.args = {simple: true};
