import React from "react";
import { Story } from "@storybook/react";
import { Button } from "./Button";
import { ButtonProps } from "./types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default {
    title: "Button",
    component: Button,
};

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Component = Template.bind({});
Component.args = {
    children: "Primary",
    icon: <FontAwesomeIcon icon={faCoffee} size="lg" />,
    isDisabled: false,
    isDarkMode: false,
    isSelected: false,
    leftIcon: true,
    size: "medium",
    shape: "squared",
    shadowed: false,
    variant: "primary",
};
