import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "../../feature/choice/menu-item.component";
import { BaseButton } from "../../feature/buttons/base-button/base-button.component";

export default {
  title: "Choice/MenuItem",
  component: MenuItem,
  subcomponents: { BaseButton },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: {
      options: ["light-theme", "dark-theme"],
      control: { type: "radio" },
      table: { defaultValue: { summary: "light-theme" } },
    },
    disabled: {
      table: { defaultValue: { summary: "false" } },
    },
    showIcon: {
      table: { defaultValue: { summary: "true" } },
      description:
        "Атрибут можно не указывать, иконка всегда встает перед текстом",
    },
    showHint: {
      table: { defaultValue: { summary: "true" } },
    },
    showCollapseIcon: {
      table: { defaultValue: { summary: "true" } },
      description: "При нажатии возникает выпадающий список (popUp)",
    },
    showText: {
      table: { defaultValue: { summary: "true" } },
    },
    isActive: {
      description: "Обозначает, что элемент выбран",
    },
    popUpScroll: {
      description:
        "Разрешает скроллить выпадающий список, если true, не разрешает - если false",
      table: { defaultValue: { summary: "false" } },
    },
    isOwner: {
      description:
        "True - если компонент является вложенным, теряет некоторые свойства",
      table: { defaultValue: { summary: "false" } },
    },
    activeState: {
      description:
        "Output - свойство, возвращает true, если элемент выбран, false, если не выбран",
    },
  },
} as Meta;

const Template = (args) => (
  <MenuItem
    {...args}
    childrenIcon={
      <BaseButton
        data-position="prev-icon"
        theme={args.theme}
        name="plc"
        size="base"
        disabled={args.disabled}
      />
    }
    childrenPopUp={
      <MenuItem
        theme={args.theme}
        label="Какая-то опция"
        hint={args.hint}
        showIcon
        showCollapseIcon={false}
      >
      </MenuItem>
    }
  ></MenuItem>
);

export const LightTheme = Template.bind({});
LightTheme.args = {
  hint: "Ctrl + Shift + N",
  label: "Label",
  showIcon: true,
  showText: true,
  showCollapseIcon: true,
  isActive: false,
  showHint: true,
  popUpScroll: false,
  theme: "light-theme",
  disabled: false,
  isOwner: false,
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  hint: "Ctrl + Shift + N",
  label: "Label",
  showIcon: true,
  showText: true,
  showCollapseIcon: true,
  isActive: false,
  showHint: true,
  popUpScroll: false,
  theme: "dark-theme",
  disabled: false,
  isOwner: false,
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
