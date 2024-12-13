import { Meta, StoryObj } from '@storybook/react';
import { CheckBox } from '../../feature/atoms/checkbox/check-box.component';
import React from 'react';

const meta: Meta<typeof CheckBox> = {
  title: 'Atoms/CheckBox',
  component: CheckBox,
  argTypes: {
    theme: {
      options: ['light-theme', 'dark-theme'],
      control: { type: 'radio' },
      table: { defaultValue: { summary: 'light-theme' } },
    },
    onChange:{
        description: 'Отправляет true, если чекбокс в состоянии checked и false - если чекбокс в состоянии unchecked'
    },
    disabled: {
      table: { defaultValue: { summary: 'false' } },
    },
    isIndeterminate: {
      table: { defaultValue: { summary: 'false' } },
    },
  },
  tags: ['autodocs'],
};

export default meta;

const Template = (args) => <CheckBox {...args} />;

export const LightTheme = Template.bind({});
LightTheme.parameters = {
  backgrounds: { default: 'Light Theme' },
};
LightTheme.args = {
  theme: 'light-theme',
  checkboxId: 'test1',
  disabled: false,
  isIndeterminate: false,
  onChange: (event)=>{console.log(event)}
};

export const DarkTheme = Template.bind({});
DarkTheme.parameters = {
  backgrounds: { default: 'Dark Theme' },
};
DarkTheme.args = {
  checkboxId: 'test1',
  theme: 'dark-theme',
  disabled: false,
  isIndeterminate: false,
};
