import type { Meta, StoryObj } from '@storybook/react';
import Alert from './alert';

const meta: Meta<typeof Alert> = {
  title: 'T-UI/Alert',
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  argTypes: {
    title: {
      type: 'string',
      description: `警告提示的标题`,
      table: {
        type: { summary: 'string' }
      }
    },
    description: {
      type: 'string',
      description: `警告提示的辅助性文字介绍`,
      table: {
        type: { summary: 'string' }
      }
    },
    type: {
      type: 'string',
      options: ['success', 'default', 'danger', 'warning'],
      control: 'select',
      description: '不同类型的 Alert',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    onClose: {
      type: 'function',
      description: '关闭alert时触发的事件',
      table: {
        type: { summary: '() => void' }
      }
    },
    closable: {
      type: 'boolean',
      description: '是否能关闭 Alert',
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    className: {
      type: 'string',
      description: '自定义类名',
      table: {
        type: { summary: 'string' }
      }
    },
    icon: {
      type: 'string',
      description: '请使用 fontawesome 的图标',
      table: {
        type: { summary: 'string' }
      }
    },
    showIcon: {
      type: 'boolean',
      description: '是否显示 Icon 图标',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const AlertDoc: Story = {
  name: 'Alert',
  args: {
    title: 'Alert',
    description: '', // 描述
    type: 'default'
  }
};

export const AlertWithDescription: Story = {
  name: '带描述的 Alert',
  args: {
    title: 'Alert',
    description: 'this is describe about alert component'
  }
};

export const AlertWithDifferentType: Story = {
  name: '不同类型的 Alert',
  args: {
    title: 'Different Type Alert',
    description: 'these are different type of the alert',
    type: 'danger'
  },
  render: (args) => {
    return (
      <>
        <Alert type="danger" {...args} />
        <Alert type="success" title="type: success" />
        <Alert type="info" title="type: info" />
      </>
    );
  }
};

export const AlertWithIcon: Story = {
  name: '带 Icon图标 的 Alert',
  args: {
    type: 'success',
    title: 'Icon Alert',
    description: '这是一个状态为 success 的 Alert',
    showIcon: true
  },
  render: (args) => {
    return <Alert {...args} />;
  }
};
