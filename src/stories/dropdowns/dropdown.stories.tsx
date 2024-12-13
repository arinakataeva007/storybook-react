import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../../feature/dropdown/dropdown.component';
import { MenuItem } from '../../feature/choice/menu-item.component';
import React from 'react';

const meta: Meta = {
  title: 'Dropdown/DropdownComponent',
  component: Dropdown,
  decorators: [
    (Story) => <div style={{ width: "300px" }}>{Story()}</div>,
  ],
  argTypes: {
    theme: {
      options: ['light-theme', 'dark-theme'],
      control: { type: 'radio' },
      table: { defaultValue: { summary: 'light-theme' } },
    },
    disabled: {
      table: { defaultValue: { summary: 'false' } },
    },
    collapsePlacement: {
      options: ['left', 'right'],
      control: { type: 'radio' },
      table: { defaultValue: { summary: 'right' } },
    },
    activeState: {
      description:
        'Output property returning true if the dropdown is open and false if the dropdown is closed.',
    },
    showIcon: {
      table: { defaultValue: { summary: 'false' } },
    },
    showText: {
      table: { defaultValue: { summary: 'true' } },
    },
  },
  render: (args) => (
    <Dropdown
      {...args}
      label="Label"
    >
      <MenuItem
        isActive={args.label === 'Option1'}
        label="Option1"
        showIcon={true}
        showText={true}
        showCollapseIcon={false}
        theme={args.theme}
      />
      <MenuItem
        label="Option2"
        isActive={args.label === 'Option2'}
        showIcon={true}
        showText={true}
        showCollapseIcon={false}
        theme={args.theme}
      />
      <MenuItem
        label="Option3"
        isActive={args.label === 'Option3'}
        showIcon={true}
        showText={true}
        showCollapseIcon={false}
        theme={args.theme}
      />
      <MenuItem
        label="Option4"
        isActive={args.label === 'Option4'}
        showIcon={true}
        showText={true}
        showCollapseIcon={false}
        theme={args.theme}
      />
      <MenuItem
        label="Option5"
        isActive={args.label === 'Option5'}
        showIcon={true}
        showText={true}
        showCollapseIcon={false}
        theme={args.theme}
      />
    </Dropdown>
  ),
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

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
    label: 'Label',
    theme: 'light-theme',
    collapsePlacement: 'right',
    showText: true,
    disabled: false,
  },
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { default: 'Dark Theme' },
  },
  args: {
    label: 'Label',
    theme: 'dark-theme',
    showText: true,
    collapsePlacement: 'right',
    disabled: false,
  },
};
