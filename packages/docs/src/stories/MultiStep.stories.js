import { jsx as _jsx } from "react/jsx-runtime";
import { Box, MultiStep } from "@taurus-ui/react";
export default {
    title: "Form/MultiStep",
    component: MultiStep,
    args: {
        size: 4,
        currentStep: 1,
    },
    decorators: [
        (story) => {
            return (_jsx(Box, Object.assign({ as: "label", css: { display: "flex", flexDirection: "row", gap: "$2" } }, { children: story() })));
        },
    ],
};
export const Primary = {};
export const Full = {
    args: {
        currentStep: 4,
    },
};
