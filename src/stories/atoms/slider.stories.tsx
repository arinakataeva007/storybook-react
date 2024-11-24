import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SliderComponent } from '../../feature/atoms/slider/slider.component';

const meta: Meta<typeof SliderComponent> = {
  title: 'Atoms/SliderComponent',
  component: SliderComponent,
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

type Story = StoryObj<typeof SliderComponent>;

export const LightTheme: Story = {
  parameters: {
    backgrounds: { default: 'Light Theme' },
  },
  args: {
    disabled: false,
    theme: 'light-theme',
  },
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { default: 'Dark Theme' },
  },
  args: {
    disabled: false,
    theme: 'dark-theme',
  },
};
