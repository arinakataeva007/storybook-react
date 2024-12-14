import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { PopUp } from '../../feature/floating/pop-up/pop-up.component';
import { MenuItem } from '../../feature/choice/menu-item.component';

const meta: Meta<typeof PopUp> = {
  title: 'Floating/PopUp',
  component: PopUp,
  argTypes: {
    theme: {
      options: ['light-theme', 'dark-theme'],
      control: { type: 'radio' },
      table: { defaultValue: { summary: 'light-theme' } },
    },
    isModal: {
      table: { defaultValue: { summary: 'false' } },
      description: 'If the pop-up is not modal, its size can be adjusted with the mouse.',
    },
    scroll: {
      table: { defaultValue: { summary: 'false' } },
      description: 'Displays only 4 items and adds scrollable content.',
    },
  },
  parameters: {
    designToken: { disable: true },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px', height: '110px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};
export default meta;

type PopUpComponentProps = React.ComponentProps<typeof PopUp>;

const Template = (args) => (
  <PopUp {...args}>
    <MenuItem
    hint='hint'
      label="Option1"
      showIcon
      showText
      showCollapseIcon={false}
      theme={args.theme}
    />
    <MenuItem
    hint='hint'
      label="Option2"
      showIcon
      showText
      showCollapseIcon={false}
      theme={args.theme}
    />
    <MenuItem
    hint='hint'
      label="Option3"
      showIcon
      showText
      showCollapseIcon={false}
      theme={args.theme}
    />
    <MenuItem
    hint='hint'
      label="Option4"
      showIcon
      showText
      showCollapseIcon={false}
      theme={args.theme}
    />
    <MenuItem
    hint='hint'
      label="Option5"
      showIcon
      showText
      showCollapseIcon={false}
      theme={args.theme}
    />
  </PopUp>
);

export const LightTheme = Template.bind({});
LightTheme.args = {
  theme: 'light-theme',
  isModal: false,
  scroll: false,
};
LightTheme.parameters = {
  backgrounds: { default: 'Light Theme' },
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  theme: 'dark-theme',
  isModal: false,
  scroll: false,
};
DarkTheme.parameters = {
  backgrounds: { default: 'Dark Theme' },
};
