import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  argTypes: {
    text: {
      control: { type: 'text' },
    },
  },
};
export default meta;

export const Demo: Story = {
  args: {
    text: 'Button',
  },
};
