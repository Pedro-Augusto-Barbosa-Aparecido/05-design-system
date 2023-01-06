import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text, TextInput } from "@taurus-ui/react";
export default {
    title: "Form/Text Input",
    component: TextInput,
    decorators: [
        (story) => {
            return (_jsxs(Box, Object.assign({ as: "label", css: { display: "flex", flexDirection: "column", gap: "$2" } }, { children: [_jsx(Text, Object.assign({ size: "sm" }, { children: "Email address" })), story()] })));
        },
    ],
};
export const Primary = {
    args: {
        placeholder: "Type your email",
    },
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
export const WithPrefix = {
    args: { prefix: "cal.com/" },
};
