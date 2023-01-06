import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Text } from "@taurus-ui/react";
export default {
    title: "Surfaces/Box",
    component: Box,
    args: {
        children: _jsx(Text, { children: "Testando o elemento box" }),
    },
    argTypes: {
        children: {
            control: {
                type: null,
            },
        },
    },
};
export const Primary = {};
