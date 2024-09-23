import type { Meta, StoryObj } from '@storybook/react';
import { ColumnGrid } from './column-grid';

type Story = StoryObj<typeof ColumnGrid>;

const meta: Meta<typeof ColumnGrid> = {
  component: ColumnGrid,
  title: 'Column Grid',
  argTypes: {
    // columnNumber: {
    //   options: [18, 12, 6, 4],
    //   control: { type: 'select' },
    // },
  },
};
export default meta;

export const Demo: Story = {
  args: {
    // columnNumber: 12,
  },
};
