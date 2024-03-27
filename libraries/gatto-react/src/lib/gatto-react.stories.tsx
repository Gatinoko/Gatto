import type { Meta, StoryObj } from '@storybook/react';
import { GattoReact } from './gatto-react';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof GattoReact> = {
  component: GattoReact,
  title: 'GattoReact',
};
export default meta;
type Story = StoryObj<typeof GattoReact>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to GattoReact!/gi)).toBeTruthy();
  },
};
