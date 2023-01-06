import { jsx as _jsx } from "react/jsx-runtime";
import { Text, Toast, ToastProvider } from "@taurus-ui/react";
export default {
    title: "Surfaces/Toast",
    component: Toast,
    args: {
        children: _jsx(Text, { children: "Toast message demo" }),
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
            return _jsx(ToastProvider, { children: story() });
        },
    ],
};
export const Primary = {
    args: {
        open: true,
    },
};
