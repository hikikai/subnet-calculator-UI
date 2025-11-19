import { Meta, StoryObj } from '@storybook/vue3';

import { UiField } from '..';
import { UiInput } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiField> = {
  component: UiField,
  args: {
    label: 'E-mail'
  },
};

export default meta;

export const Primary: StoryObj<typeof UiField> = {
  render: (args) => ({
    components: { UiField, UiInput },
    setup: () => ({ args }),
    template: html`<UiField v-bind="args">
                    <UiInput placeholder="Введите Email" />
                    </UiField>
    `,
  }),
};