import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ProgressBarComponent } from '../../feature/atoms/progress-bar/progress-bar.component';

const meta: Meta<typeof ProgressBarComponent> = {
  title: "Atoms/ProgressBarComponent",
  component: ProgressBarComponent,
  argTypes: {
    theme: {
      options: ["light-theme", "dark-theme"],
      control: { type: "radio" },
      table: { defaultValue: { summary: "light" } },
    },
    leftRectangleWidth: {
      description: 'Показывает "прогресс" в %-ах',
      control: { type: "number" },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "300px",
          height: "8px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {Story()}
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProgressBarComponent>;

export const LightTheme: Story = {
  parameters: {
    backgrounds: { default: "Light Theme" },
  },
  args: {
    leftRectangleWidth: '100',
    theme: "light-theme",
  },
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { default: "Dark Theme" },
  },
  args: {
    leftRectangleWidth: '100',
    theme: "dark-theme",
  },
};
