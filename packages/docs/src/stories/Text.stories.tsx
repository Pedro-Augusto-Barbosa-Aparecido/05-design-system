import type { StoryObj, Meta } from "@storybook/react";

import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, consequuntur vero? Soluta, maiores. Eum, inventore in quaerat accusamus suscipit sunt praesentium enim iusto dolorum mollitia, voluptates consequatur. Officiis, officia eligendi.",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong Text",
    as: "strong",
  },
};
