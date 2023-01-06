import { Text } from "@taurus-ui/react";
export default {
    title: "Typography/Text",
    component: Text,
    args: {
        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, consequuntur vero? Soluta, maiores. Eum, inventore in quaerat accusamus suscipit sunt praesentium enim iusto dolorum mollitia, voluptates consequatur. Officiis, officia eligendi.",
        size: "md",
    },
    argTypes: {
        size: {
            options: [
                "xxs",
                "xs",
                "sm",
                "md",
                "lg",
                "xl",
                "2xl",
                "4xl",
                "5xl",
                "6xl",
                "7xl",
                "8xl",
                "9xl",
            ],
            control: {
                type: "inline-radio",
            },
        },
    },
};
export const Primary = {};
export const CustomTag = {
    args: {
        children: "Strong Text",
        as: "strong",
    },
};
