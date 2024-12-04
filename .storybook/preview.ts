import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
		backgrounds: {
			default: 'Light Theme',
			values: [
				{
					name: 'Light Theme',
					value: 'rgba(255, 255, 255, 1)',
				},
				{
					name: 'Dark Theme',
					value: 'rgba(85, 85, 103, 1)',
				},
			],
		},
  },
};

export default preview;
