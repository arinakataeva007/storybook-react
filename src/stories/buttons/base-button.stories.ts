import { StoryObj, Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import {
  BaseButton,
  BaseButtonProps,
} from "../../feature/buttons/base-button/base-button.component";

const meta: Meta<typeof BaseButton> = {
  title: "Buttons/BaseButton",
  component: BaseButton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["base", "mid", "large", "extra-large"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "base",
          detail: "font-size: 14px; line-height: 16px",
        },
      },
    },
    theme: {
      options: ["light-theme", "dark-theme"],
      control: { type: "radio" },
      table: { defaultValue: { summary: "light-theme" } },
    },
    disabled: {
      table: { defaultValue: { summary: "false" } },
    },
    isOwner: {
      description:
        "Убирает поведение по наведению и добавляет сокращение через 3 точки",
    },
    name: {
      options: [
        "app",
        "app_fill",
        "check-box_checked_fill",
        "check-box_checked_line",
        "check-box_indeterminate",
        "check-box_unchecked",
        "plc",
        "circuit",
        "table",
        "app_fill",
        "workstation",
        "BDE-selection",
        "BDE-template",
        "action",
        "add",
        "add-circle",
        "add-item",
      ],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseButton>;
export const LightTheme: Story = {
  args: {
    size: "base",
    theme: "light-theme",
    disabled: false,
    isOwner: false,
    name: "add",
  },
};
export const DarkTheme: Story = {
  args: {
    size: "base",
    theme: "light-theme",
    disabled: false,
    isOwner: false,
    name: "add",
  },
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
