import type { Meta, StoryObj } from '@storybook/react';

import Button from './button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'T-UI/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    btnType: {
      type: 'string',
      options: ['default', 'danger', 'primary', 'link', 'dash'],
      control: 'select',
      description: '不同类型的按钮',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    children: {
      type: 'string',
      description: `按钮当前值`,
      control: 'string',
      table: {
        defaultValue: { summary: 'Default' } 
      }
    },
    disabled: {
      type: 'boolean',
      description: '是否禁用按钮',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    size: {
      type: 'string',
      options: ['default', 'large', 'small'],
      control: 'inline-radio',
      description: '按钮的大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    href: {
      type: 'string',
      description: '当 btnType 为 link 时，当前属性可用',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'link' }
      }
    }
  },
  args: {
    disabled: false,
    children: 'Default',
    btnType: 'primary',
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ButtonDoc: Story = {
  args: {
    children: 'Button',
    btnType: 'primary'
  },
};

export const Primary: Story = {
  name: '不同类型的 Button',
  render: () => {
    return (
      <>
        <Button btnType='primary'>Primary</Button>
        <Button btnType='dash'>Dash</Button>
        <Button btnType='danger'>Danger</Button>
      </>
    )
  }
};

export const Large: Story = {
  name: '不同大小的 Button',
  render: () => {
    return (
      <>
        <Button btnType='primary' size='large'>Primary</Button>
        <Button btnType='default'>Default</Button>
        <Button btnType='danger' size='small'>Danger</Button>
      </>
    )
  }
};
