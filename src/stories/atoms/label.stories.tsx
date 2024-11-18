import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { LabelComponent } from "../../feature/atoms/label/label.component";
import { BaseButton } from "../../feature/buttons/base-button/base-button.component";

const meta: Meta<typeof LabelComponent> = {
  title: "Atoms/Label",
  component: LabelComponent,
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
    iconPadding: {
      options: ["left", "right"],
      control: { type: "radio" },
    },
    disabled: {
      table: { defaultValue: { summary: "false" } },
    },
    isOwner: {
      description:
        "Убирает поведение по наведению и добавляет сокращение через 3 точки",
    },
    showIcon: {
      table: { defaultValue: { summary: "false" } },
      description:
        "Атрибут prev-icon - вставляет иконку перед текстом; after-icon - вставляет иконку после текста",
    },
    showText: {
      table: { defaultValue: { summary: "true" } },
    },
    label: {
      control: { type: "text" }, //Added control type for label
    },
  },
};

export default meta;
type Story = StoryObj<typeof LabelComponent>;

const Template = (args) => (
  <div style={{ width: "300px" }}>
    <LabelComponent {...args}></LabelComponent>
  </div>
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
    disabled: false,
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <mask
          id="mask0_2223_2024"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="16"
        >
          <rect width="16" height="16" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2223_2024)">
          <path
            d="M5.6 11.3333L8 8.93333L10.4 11.3333L11.3333 10.4L8.93333 8L11.3333 5.6L10.4 4.66667L8 7.06667L5.6 4.66667L4.66667 5.6L7.06667 8L4.66667 10.4L5.6 11.3333ZM3.33333 14C2.96667 14 2.65267 13.8696 2.39133 13.6087C2.13044 13.3473 2 13.0333 2 12.6667V3.33333C2 2.96667 2.13044 2.65267 2.39133 2.39133C2.65267 2.13044 2.96667 2 3.33333 2H12.6667C13.0333 2 13.3473 2.13044 13.6087 2.39133C13.8696 2.65267 14 2.96667 14 3.33333V12.6667C14 13.0333 13.8696 13.3473 13.6087 13.6087C13.3473 13.8696 13.0333 14 12.6667 14H3.33333ZM3.33333 12.6667H12.6667V3.33333H3.33333V12.6667Z"
            fill="#42444A"
          />
        </g>
      </svg>
    ),
  },
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
    disabled: false,
  },
};
