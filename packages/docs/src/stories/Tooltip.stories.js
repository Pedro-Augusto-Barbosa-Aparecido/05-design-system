import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Text, Tooltip, TooltipProvider, } from "@taurus-ui/react";
export default {
    title: "Surfaces/Tooltip",
    component: Tooltip,
    args: {
        message: "Example tooltip message",
        trigger: (_jsx(Box, Object.assign({ css: {
                width: "fit-content",
            } }, { children: _jsx(Text, { children: "Some text." }) }))),
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
            return _jsx(TooltipProvider, { children: story() });
        },
    ],
};
export const Primary = {};
