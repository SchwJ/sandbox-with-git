import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    repositoryUrl: 'https://github.com/SchwJ/sandbox-with-git',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
