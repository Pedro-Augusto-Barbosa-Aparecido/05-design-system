import { Heading } from "@taurus-ui/react";
export default {
    title: "Typography/Heading",
    component: Heading,
    args: {
        children: "Custom title",
        size: "md",
    },
    argTypes: {
        size: {
            options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
            control: {
                type: "inline-radio",
            },
        },
    },
};
export const Primary = {};
export const CustomTag = {
    args: {
        children: "H1 Heading",
        as: "h1",
    },
    parameters: {
        docs: {
            description: {
                story: "Por padrão o Heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`",
            },
        },
    },
};
