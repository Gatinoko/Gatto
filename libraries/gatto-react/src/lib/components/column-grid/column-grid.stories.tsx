import type { Meta, StoryObj } from '@storybook/react';
import { ColumnGrid } from './column-grid';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ColumnGrid> = {
  component: ColumnGrid,
  title: 'Column Grid',
};
export default meta;
type Story = StoryObj<typeof ColumnGrid>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
