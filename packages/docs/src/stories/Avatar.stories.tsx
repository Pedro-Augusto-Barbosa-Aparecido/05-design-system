import type { StoryObj, Meta } from "@storybook/react";

import { Avatar, AvatarProps } from "@taurus-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://avatars.githubusercontent.com/u/77130441?v=4",
    alt: "Pedro Augusto",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: "With Fallback",
  },
};
