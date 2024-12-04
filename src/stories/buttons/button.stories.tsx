import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonComponent } from "../../feature/buttons/button/button.component";
import { BaseButton } from '../../feature/buttons/base-button/base-button.component';
import { LabelComponent } from '../../feature/atoms/label/label.component'
export default {
  title: "Buttons/ButtonComponent",
  component: ButtonComponent,
    subcomponents: { BaseButton, LabelComponent },
  argTypes: {
    state: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
      table: { defaultValue: { summary: "primary" } },
    },
    theme: {
      options: ["light-theme", "dark-theme"],
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
} as Meta;
type Story = StoryObj<typeof ButtonComponent>;
const Template = (args: any) => 
<ButtonComponent {...args} ></ButtonComponent>;

export const LightTheme = Template.bind({});
LightTheme.args = {
  label: "Label",
  showIcon: true,
  showText: true,
  disabled: false,
  state: "primary",
  theme: "light-theme",
  nameIcon: 'plc'
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  label: "Label",
  showIcon: true,
  showText: true,
  disabled: false,
  state: "primary",
  theme: "dark-theme",
  nameIcon: 'plc'
};
LightTheme.parameters = {
  backgrounds: { default: "Light Theme" },
  docs: {
    description: {
      story: "This story demonstrates the light theme of the component.",
    },
  },
};
DarkTheme.parameters = {
  backgrounds: { default: "Dark Theme" },
  docs: {
    description: {
      story: "This story demonstrates the dark theme of the component.",
    },
  },
};