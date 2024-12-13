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
      description: 'Отправляет введенное в input значение после того, как он теряет фокус',
    },
    onInput: {
      action: 'input',
      description: 'Отправляет каждый введенный в input символ, сразу послее ввода',
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
    value: 'SomeValue',
    hint: 'hint',
    showHint: true,
    disabled: false,
    theme: 'light-theme',
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
    value: 'SomeValue',
    hint: 'hint',
    showHint: true,
    theme: 'dark-theme',
  },
};
