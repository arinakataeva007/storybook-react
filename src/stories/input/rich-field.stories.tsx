import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {RichTextField} from '../../feature/input/rich-text-field/rich-text.component';

const meta: Meta<typeof RichTextField> = {
  title: 'Input/RichTextField',
  component: RichTextField,
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
      table: { defaultValue: { summary: 'false' } },
    },
    showHint: {
      table: { defaultValue: { summary: 'false' } },
    },
    onInputChange: {
      description: 'Callback - triggered on every input change',
    },
    onValueChange: {
      description: 'Callback - triggered when the field value changes',
    },
    placeholder: {
      description: 'Placeholder text for the input field',
    },
    hint: {
      description: 'Hint text displayed below the input field',
    },
  },
  decorators: [
    (Story) => <div style={{ width: '300px' }}>{Story()}</div>,
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RichTextField>;

export const LightTheme: Story = {
  parameters: {
    backgrounds: { default: 'Light Theme' },
  },
  args: {
    placeholder: 'Placeholder',
    hint: 'Long Hint Text',
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
    hint: 'Long Hint Text',
    showHint: true,
    disabled: false,
    theme: 'dark-theme',
  },
};
