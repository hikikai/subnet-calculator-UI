import { Meta, StoryObj } from '@storybook/vue3';

import { UiInput } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiInput> = {
  component: UiInput,
  args: {
    placeholder: 'Введите текст',
    modelValue: ''
  },
};

export default meta;

export const Primary: StoryObj<typeof UiInput> = {
  render: (args) => ({
    components: { UiInput },
    setup: () => ({ args }),
    template: html`<UiInput v-bind="args" />`,
  }),
};