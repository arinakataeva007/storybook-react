import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TextField from '../../feature/input/text-field/text-field.component';
const meta: Meta<typeof TextField> = {
  title: 'Input/TextField',
  component: TextField,
  parameters: {
    designToken: {
      disable: true,
    },
  },
  argTypes: {
    theme: {
      options: ['light-theme', 'dark-theme'],
      control: { type: 'radio' },
      table: { defaultValue: { summary: 'light-theme' } },
    },
    type: {
      options: ['text', 'password'],
      control: { type: 'radio' },
      table: { defaultValue: { summary: 'text' } },
    },
    disabled: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    showHint: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    hint: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    autofocus: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    value: {
      control: { type: 'text' },
    },
    onChange: {
      action: 'changed',
      description: 'Fires when the input value changes',
    },
    onInput: {
      action: 'input',
      description: 'Fires on every key input',
    },
  },
  decorators: [
    (Story) => <div style={{ width: '300px' }}>{Story()}</div>,
  ],
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const LightTheme: Story = {
  parameters: {
    backgrounds: { default: 'Light Theme' },
  },
  args: {
    placeholder: 'Placeholder',
    autofocus: true,
    hint: 'hint',
    showHint: true,
    disabled: false,
    theme: 'light-theme',
    type: 'text',
  },
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { default: 'Dark Theme' },
  },
  args: {
    placeholder: 'Placeholder',
    disabled: false,
    autofocus: true,
    hint: 'hint',
    showHint: true,
    theme: 'dark-theme',
    type: 'password',
  },
};
