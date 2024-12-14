import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {FormatedTextField} from '../../feature/input/formated-text/formated-text-field.component';

const meta: Meta<typeof FormatedTextField> = {
  title: 'Input/FormatedTextField',
  component: FormatedTextField,
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
    onInput: {
      description: 'Callback - triggered on every input change',
    },
    placeholder: {
      description: 'Placeholder text for the input field',
    },
  },
  decorators: [
    (Story) => <div style={{ width: '300px' }}>{Story()}</div>,
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormatedTextField>;

export const LightTheme: Story = {
  parameters: {
    backgrounds: { default: 'Light Theme' },
  },
  args: {
    placeholder: 'Placeholder',
    disabled: false,
    theme: 'light-theme',
    textRich: 'Информация, которую запросил пользователь. Очень короткий поясняющий текст к ней.'
  },
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { default: 'Dark Theme' },
  },
  args: {
    placeholder: 'Placeholder',
    disabled: false,
    theme: 'dark-theme',
    textRich: 'Информация, которую запросил пользователь. Очень короткий поясняющий текст к ней.',
  },
};
