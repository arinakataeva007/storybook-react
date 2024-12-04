import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CollapseIcon from '../../feature/icons/collapse-icon/collapse-icon.component';

export default {
  title: 'Icons/CollapseIconComponent',
  component: CollapseIcon,
  argTypes: {
    size: {
      options: ['base', 'mid', 'large', 'extra-large'],
      control: { type: 'select' },
      table: { defaultValue: { summary: 'base' } },
    },
    theme: {
      options: ['light-theme', 'dark-theme'],
      control: { type: 'radio' },
      table: { defaultValue: { summary: 'light-theme' } },
    },
    rotate: {
      options: ['up', 'down', 'right', 'left'],
      control: { type: 'select' },
      table: { defaultValue: { summary: 'up' } },
    },
  },
  tags: ['autodocs'],
} as Meta<typeof CollapseIcon>;

const Template = (args) => <CollapseIcon {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {
  isFill: false,
  fill: 'light-theme',
  size: 'large',
  rotate: 'down',
  theme: 'light-theme',
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  isFill: true,
  fill: 'dark-theme',
  size: 'large',
  rotate: 'right',
  theme: 'dark-theme',
};
LightTheme.parameters = {
  backgrounds: { default: "Light Theme" },
  docs: {
    description: {
      story: "This story demonstrates the light theme of the component.",
    },
  },
};
DarkTheme.parameters = {
  backgrounds: { default: "Dark Theme" },
  docs: {
    description: {
      story: "This story demonstrates the dark theme of the component.",
    },
  },
};