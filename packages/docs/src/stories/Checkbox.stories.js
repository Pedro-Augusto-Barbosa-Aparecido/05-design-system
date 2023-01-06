import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text, Checkbox } from "@taurus-ui/react";
export default {
    title: "Form/Checkbox",
    component: Checkbox,
    decorators: [
        (story) => {
            return (_jsxs(Box, Object.assign({ as: "label", css: { display: "flex", flexDirection: "row", gap: "$2" } }, { children: [story(), _jsx(Text, Object.assign({ size: "sm" }, { children: "Accept terms of user" }))] })));
        },
    ],
};
export const Primary = {};
