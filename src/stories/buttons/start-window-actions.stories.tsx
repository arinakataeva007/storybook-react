import type { Meta, StoryObj } from '@storybook/react';
import StartWindowActionComponent from '../../feature/buttons/start-window-action/start-window.component';

const meta: Meta<typeof StartWindowActionComponent> = {
  title: 'Buttons/CreateProjectButtonComponent',
  component: StartWindowActionComponent,
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
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StartWindowActionComponent>;

export const LightTheme: Story = {
  args: {
    label: 'New Project',
    theme: 'light-theme',
    disabled: false,
    onStateChange: (e) => console.log('Button clicked:', e),
  },
};

export const DarkTheme: Story = {
  args: {
    label: 'Новый проект',
    disabled: false,
    theme: 'dark-theme',
    onStateChange: (e) => console.log('Button clicked:', e),
  },
};
