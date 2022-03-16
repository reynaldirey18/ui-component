import {Meta, Story} from '@storybook/vue3';
import VRadioGroup from './VRadioGroup.vue';

export default {
  title: 'Components/Form/RadioGroup',
  component: VRadioGroup,
  argTypes: {},
  args: {
    modelValue: '',
    value: '',
    items: [...Array(5)].map((v, k) => ({text: `Item ${k + 1}`, value: k + 1})),
    itemText: 'text',
    itemValue: 'value',
    disabled: false,
    readonly: false,
    error: false,
    errorMessages: [],
    name: '',
    label: 'Select',
    inline: false,
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {VRadioGroup},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<V-RadioGroup v-bind='args'/>`,
});

export const Default = Template.bind({});
Default.args = {};

export const Inline = Template.bind({});
Inline.args = {
  inline: true,
};

export const Error = Template.bind({});
Error.args = {
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: '',
};

// export const RadioGroup: Story = (args) => ({
//   components: {VRadioGroup},
//   setup() {
//     return {args};
//   },
//   template: '<VRadioGroup v-bind="args" />',
// });
// RadioGroup.storyName = 'RadioGroup';
