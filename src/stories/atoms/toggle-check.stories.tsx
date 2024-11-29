import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {ToggleCheckComponent} from '../../feature/atoms/toggle-check/toggle-check';

// Define the metadata for the ToggleCheckComponent story
const meta: Meta<typeof ToggleCheckComponent> = {
  title: 'Atoms/ToggleCheckComponent',
  component: ToggleCheckComponent,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      options: ['light-theme', 'dark-theme'],
      control: { type: 'radio' },
      table: { defaultValue: { summary: 'light-theme' } },
    },
    disabled: {
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

// Define the story type
type Story = StoryObj<typeof ToggleCheckComponent>;

// Define the LightTheme story
export const LightTheme: Story = {
  parameters: {
    backgrounds: { default: 'Light Theme' },
  },
  args: {
    toggleId: 'test1',
    disabled: false,
    theme: 'light-theme',
  },
};

// Define the DarkTheme story
export const DarkTheme: Story = {
  parameters: {
    backgrounds: { default: 'Dark Theme' },
  },
  args: {
    toggleId: 'test1',
    disabled: false,
    theme: 'dark-theme',
  },
};
