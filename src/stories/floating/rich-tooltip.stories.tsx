import React, { Children } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RichTooltip } from "../../feature/floating/rich-tooltil/rich-tooltip.component";

const meta: Meta<typeof RichTooltip> = {
  title: "Floating/RichTooltip",
  component: RichTooltip,
  argTypes: {
    theme: {
      options: ["light-theme", "dark-theme"],
      control: { type: "radio" },
      table: { defaultValue: { summary: "light-theme" } },
    },
    tailPlacement: {
      options: ["D", "U", "R", "L"],
      control: { type: "select" },
      table: { defaultValue: { summary: "D" } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "600px", height: "110px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};
export default meta;

type RichTooltip = React.ComponentProps<typeof RichTooltip>;

export const LightTheme: StoryObj = {
  args: {
    theme: "light-theme",
    tailPlacement: "D",
    textRich: 'Информация, которую запросил пользователь. Очень короткий поясняющий текст к ней.'
  },
  parameters: {
    backgrounds: { default: "Light Theme" },
  },
};
export const DarkTheme: StoryObj = {
    args: {
        theme: 'dark-theme',
        tailPlacement: "D",
        textRich: 'Информация, которую запросил пользователь. Очень короткий поясняющий текст к ней.'
    },
    parameters: {
        backgrounds: { default: "Dark Theme" },
        
    }
}
