import type { StoryObj, Meta } from "@storybook/react";

import { Text, Toast, ToastProps, ToastProvider } from "@taurus-ui/react";

export default {
  title: "Surfaces/Toast",
  component: Toast,
  args: {
    children: <Text>Toast message demo</Text>,
    title: "Example Toast",
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (story) => {
      return <ToastProvider>{story()}</ToastProvider>;
    },
  ],
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {
  args: {
    open: true,
  },
};
