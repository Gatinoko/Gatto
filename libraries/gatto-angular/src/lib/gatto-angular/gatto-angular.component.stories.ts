import type { Meta, StoryObj } from '@storybook/angular';
import { GattoAngularComponent } from './gatto-angular.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<GattoAngularComponent> = {
  component: GattoAngularComponent,
  title: 'GattoAngularComponent',
};
export default meta;
type Story = StoryObj<GattoAngularComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/gatto-angular works!/gi)).toBeTruthy();
  },
};
