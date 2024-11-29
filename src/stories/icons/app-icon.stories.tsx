import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AppIconComponent from '../../feature/icons/app-icon/app-icon.component'; // Adjust the import path as needed

const meta: Meta = {
  title: 'Icons/AppIconComponent',
  component: AppIconComponent,
  argTypes: {
    size: {
      options: ['base', 'mid', 'large', 'extra-large'],
      control: { type: 'select' },
      defaultValue: 'base', // Default size value
    },
    theme: {
      options: ['light-theme', 'dark-theme'],
      control: { type: 'radio' },
      defaultValue: 'light-theme', // Default theme value
    },
    state: {
      options: ['driver', 'disabled'],
      control: { type: 'radio' },
    },
    type: {
      options: ['server', 'app'],
      control: { type: 'radio' },
      defaultValue: 'app', // Default type value
    },
  },
  tags: ['autodocs'],
};

export default meta;

type StoryType = StoryObj<typeof AppIconComponent>;

// Light Theme Story
export const LightTheme: StoryType = {
  parameters: {
    backgrounds: { default: 'Light Theme' },
  },
  args: {
    type: 'app',
    size: 'large',
    theme: 'light-theme',
  },
};

// Dark Theme Story
export const DarkTheme: StoryType = {
  parameters: {
    backgrounds: { default: 'Dark Theme' },
  },
  args: {
    type: 'server',
    size: 'large',
    theme: 'dark-theme',
  },
};
