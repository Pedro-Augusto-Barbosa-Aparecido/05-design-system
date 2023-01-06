import type { StoryObj, Meta } from "@storybook/react";

import {
  Box,
  Text,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from "@taurus-ui/react";

export default {
  title: "Surfaces/Tooltip",
  component: Tooltip,
  args: {
    message: "Example tooltip message",
    trigger: (
      <Box
        css={{
          width: "fit-content",
        }}
      >
        <Text>Some text.</Text>
      </Box>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    trigger: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (story) => {
      return <TooltipProvider>{story()}</TooltipProvider>;
    },
  ],
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
