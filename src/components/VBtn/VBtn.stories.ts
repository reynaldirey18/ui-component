import {Meta, Story} from '@storybook/vue3';
import Button from './VBtn.vue';
import {VBtnProps} from './VBtn';
import {HomeIcon} from '@heroicons/vue/outline';

const themeColors = [
  'default',
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
  'dark',
];

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    color: {
      control: 'select',
      options: themeColors,
    },
    size: {
      control: 'select',
      options: sizes,
    },
  },
  args: {
    color: '',
    outlined: false,
    rounded: false,
    ring: false,
    disabled: false,
    text: false,
    size: '',
    tile: false,
    icon: false,
    loading: false,
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<VBtnProps> = (args) => ({
  components: {Button},
  setup() {
    return {args, colors: themeColors};
  },
  template: `<div class="space-x-2 space-y-2">
    <Button v-for="color in colors" :key="color" v-bind="args" :color="color">
      <span>{{ args.label || color }}</span>
    </Button>
  </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-btn>Button</v-btn>',
    },
  },
};

// export const Primary = Template.bind({});
// Primary.args = {color: 'primary'};
// Primary.parameters = {
//   docs: {
//     source: {
//       code: '<v-btn color="primary">Button</v-btn>',
//     },
//   },
// };

// export const Secondary = Template.bind({});
// Secondary.args = {color: 'secondary'};
// Secondary.parameters = {
//   docs: {
//     source: {
//       code: '<v-btn color="secondary">Button</v-btn>',
//     },
//   },
// };

// export const Info = Template.bind({});
// Info.args = {color: 'info'};
// Info.parameters = {
//   docs: {
//     source: {
//       code: '<v-btn color="info">Button</v-btn>',
//     },
//   },
// };

// export const Success = Template.bind({});
// Success.args = {color: 'success'};
// Success.parameters = {
//   docs: {
//     source: {
//       code: '<v-btn color="success">Button</v-btn>',
//     },
//   },
// };

// export const Error = Template.bind({});
// Error.args = {color: 'error'};
// Error.parameters = {
//   docs: {
//     source: {
//       code: '<v-btn color="error">Button</v-btn>',
//     },
//   },
// };

// export const Warning = Template.bind({});
// Warning.args = {color: 'warning'};
// Warning.parameters = {
//   docs: {
//     source: {
//       code: '<v-btn color="warning">Button</v-btn>',
//     },
//   },
// };

export const Outlined = Template.bind({});
Outlined.args = {color: 'primary', outlined: true};
Outlined.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" outlined>Button</v-btn>',
    },
  },
};

export const Text = Template.bind({});
Text.args = {color: 'primary', text: true};
Text.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" text>Button</v-btn>',
    },
  },
};

export const Rounded = Template.bind({});
Rounded.args = {color: 'primary', rounded: true};
Rounded.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" rounded>Button</v-btn>',
    },
  },
};

export const Tile = Template.bind({});
Tile.args = {color: 'primary', tile: true};
Tile.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" tile>Button</v-btn>',
    },
  },
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {color: 'primary', size: 'xs'};
ExtraSmall.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" size="xs">Button</v-btn>',
    },
  },
};

export const Small = Template.bind({});
Small.args = {color: 'primary', size: 'sm'};
Small.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" size="sm">Button</v-btn>',
    },
  },
};

export const Large = Template.bind({});
Large.args = {color: 'primary', size: 'lg'};
Large.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" size="lg">Button</v-btn>',
    },
  },
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {color: 'primary', size: 'xl'};
ExtraLarge.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" size="xl">Button</v-btn>',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {color: 'primary', disabled: true};
Disabled.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" disabled>Button</v-btn>',
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {color: 'primary', loading: true};
Loading.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" loading>Button</v-btn>',
    },
  },
};

export const Shadow = Template.bind({});
Shadow.args = {color: 'primary', shadow: true};
Shadow.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" shadow>Button</v-btn>',
    },
  },
};

export const Icon: Story<VBtnProps> = (args) => ({
  components: {Button, HomeIcon},
  setup() {
    return {args, sizes, themeColors};
  },
  template: `<div v-for="color in themeColors" :key="color" class="mb-6">
  <div>
    <div class="font-bold text-lg mb-2">{{color}}</div>
    <div class="flex items-end gap-2">
      <Button v-for="size in sizes" :key="size" v-bind="args" :color="color" :size="size" icon>
        <HomeIcon class="w-6 h-6"/>
      </Button>
    </div>
  </div>
  </div>`,
});

export const Sizes: Story<VBtnProps> = (args) => ({
  components: {Button},
  setup() {
    return {args, sizes, themeColors};
  },
  template: `<div v-for="color in themeColors" :key="color" class="mb-6">
  <div>
    <div class="font-bold text-lg mb-2">{{color}}</div>
    <div class="flex items-end gap-2">
      <Button v-for="size in sizes" :key="size" v-bind="args" :color="color" :size="size">
        {{ size }}
      </Button>
    </div>
  </div>
  </div>`,
});
