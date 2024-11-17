import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { LabelComponent } from '../../feature/atoms/label/label.component';
// import BaseIcon from '../../lib/features/icons/base/base-icon/base-icon.component'; // Adjust path as needed


const meta: Meta<typeof LabelComponent> = {
  title: 'Atoms/Label',
  component: LabelComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['base', 'mid', 'large', 'extra-large'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'base', detail: 'font-size: 14px; line-height: 16px' },
      },
    },
    theme: {
      options: ['light-theme', 'dark-theme'],
      control: { type: 'radio' },
      table: { defaultValue: { summary: 'light-theme' } },
    },
    iconPadding: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
    disabled: {
      table: { defaultValue: { summary: 'false' } },
    },
    isOwner: {
      description: 'Убирает поведение по наведению и добавляет сокращение через 3 точки',
    },
    showIcon: {
      table: { defaultValue: { summary: 'false' } },
      description:
        'Атрибут prev-icon - вставляет иконку перед текстом; after-icon - вставляет иконку после текста',
    },
    showText: {
      table: { defaultValue: { summary: 'true' } },
    },
    label: {
      control: { type: 'text' }, //Added control type for label
    }
  },
};

export default meta;
type Story = StoryObj<typeof LabelComponent>;


const Template = (args) => (
  <div style={{ width: '300px' }}>
    <LabelComponent {...args} >
       {args.showIcon}
    </LabelComponent>
  </div>
);


export const LightTheme: Story = {
  parameters: {
    backgrounds: { default: 'Light Theme' },
    docs: {
      description: {
        story: '',
      },
    },
  },
  args: {
    size: 'large',
    isOwner: false,
    showIcon: false,
    showText: true,
    label: 'Label',
    iconPadding: 'right',
    disabled: false,
  },
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { default: 'Dark Theme' },
  },
  args: {
    size: 'large',
    showIcon: false,
    isOwner: false,
    showText: true,
    label: 'Label',
    iconPadding: 'right',
    disabled: false,
  },
};