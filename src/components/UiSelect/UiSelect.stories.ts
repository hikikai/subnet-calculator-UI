import { Meta, StoryObj } from '@storybook/vue3';

import { UiSelect } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiSelect> = {
  component: UiSelect,
  args: {
    options: ['0.0.0.0', '128.0.0.0', '255.255.255.255'],
    modelValue: ''
  },
};

export default meta;

export const Primary: StoryObj<typeof UiSelect> = {
  render: (args) => ({
    components: { UiSelect },
    setup: () => ({ args }),
    template: html`<UiSelect v-bind="args" />`,
  }),
};