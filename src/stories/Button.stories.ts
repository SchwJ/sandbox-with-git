import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
  parameters: {
    filePath: 'src/stories/Button.tsx',
    //repositoryUrl: 'https://github.com/SchwJ/sandbox-with-git',
  },
  /*
  If your components are placed in multiple repositories, you can also define the repository URL per the specific story:

  export const Primary: Story = {
    args: { ... },
      parameters: {
        filePath: 'src/stories/Button.tsx',
        repositoryUrl: 'https://github.com/[username]/[reponame]'
      }
  };
  */
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
  parameters: {
    filePath: 'src/stories/Button.tsx',
    repositoryUrl: 'https://github.com/SchwJ/sandbox-with-git',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
  parameters: {
    filePath: 'src/stories/Button.tsx',
    repositoryUrl: 'https://github.com/SchwJ/sandbox-with-git',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
  parameters: {
    filePath: 'src/stories/Button.tsx',
    repositoryUrl: 'https://github.com/SchwJ/sandbox-with-git',
  },
};
