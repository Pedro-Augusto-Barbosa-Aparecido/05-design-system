import type { StoryObj, Meta } from "@storybook/react";

import { Box, Text, Checkbox, CheckboxProps } from "@taurus-ui/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "row", gap: "$2" }}
        >
          {story()}
          <Text size={"sm"}>Accept terms of user</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
