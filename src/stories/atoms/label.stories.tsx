import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import LabelComponent from "../../feature/atoms/label/label.component";
import { BaseButton } from '../../feature/buttons/base-button/base-button.component';

const meta: Meta<typeof LabelComponent> = {
  title: "Atoms/LabelComponent",
  component: LabelComponent,
  decorators: [
    (Story) => <div style={{ width: "300px" }}>{Story()}</div>,
  ],
  argTypes: {
    size: {
      options: ["base", "mid", "large", "extra-large"],
      control: { type: "select" },
      table: {
        defaultValue: { summary: "base", detail: "font-size: 14px; line-height: 16px" },
      },
    },
    theme: {
      options: ["light-theme", "dark-theme"],
      control: { type: "radio" },
      table: { defaultValue: { summary: "light-theme" } },
    },
    iconPadding: {
      options: ["left", "right"],
      control: { type: "radio" },
    },
    disabled: {
      table: { defaultValue: { summary: "false" } },
    },
    isOwner: {
      description: "Убирает поведение по наведению и добавляет сокращение через 3 точки",
    },
    showIcon: {
      table: { defaultValue: { summary: "false" } },
      description:
        "Атрибут prev-icon - вставляет иконку перед текстом; after-icon - вставляет иконку после текста",
    },
    showText: {
      table: { defaultValue: { summary: "true" } },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LabelComponent>;

const Template = (args: any) => (
  <LabelComponent {...args}>
    {args.showIcon && (
      <BaseButton
        name="circuit"
        data-position="prev-icon"
        disabled={args.disabled}
        theme={args.theme}
        isOwner={true}
        size={args.size}
      />
    )}
  </LabelComponent>
);

export const LightTheme: Story = {
  parameters: {
    backgrounds: { default: "Light Theme" },
    docs: {
      description: {
        story: "",
      },
    },
  },
  args: {
    size: "large",
    isOwner: false,
    showIcon: false,
    showText: true,
    label: "Label",
    iconPadding: "right",
    theme: "light-theme",
    disabled: false,
  },
  render: Template,
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { default: "Dark Theme" },
  },
  args: {
    size: "large",
    showIcon: false,
    isOwner: false,
    showText: true,
    label: "Label",
    iconPadding: "right",
    theme: "dark-theme",
    disabled: false,
  },
  render: Template,
};
