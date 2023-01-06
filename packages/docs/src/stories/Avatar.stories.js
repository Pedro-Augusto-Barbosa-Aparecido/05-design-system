import { Avatar } from "@taurus-ui/react";
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
};
export const Primary = {};
export const WithFallback = {
    args: {
        src: undefined,
        alt: "With Fallback",
    },
};
