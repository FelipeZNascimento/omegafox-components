import React from "react";
import { Story } from "@storybook/react";
import { Button } from "./Button";
import { ButtonProps } from "./types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faCoffee, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

export default {
    title: "Buttons",
    component: Button,
};

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Buttons = () => (
    <div style={{ width: 400 }}>
        <Button
            children="Confirm"
            variant="confirm"
        />
        <Button
            children="Cancel"
            variant="danger"
        />
        <Button
            children="Iconed"
            icon={<FontAwesomeIcon icon={faCoffee} size="lg" />}
            leftIcon={true}
        />
        <Button
            icon={<FontAwesomeIcon icon={faChevronLeft} size="lg" />}
        />
        <Button
            children="Warning"
            icon={<FontAwesomeIcon icon={faTriangleExclamation} size="lg" />}
            leftIcon={false}
            variant="warning"
        />
        <Button
            isDisabled
            children="Disabled"
        />
        <Button
            children="Neutral Small"
            size="small"
            variant="neutral"
        />
        <Button
            children="Neutral Medium"
            variant="neutral"
        />
        <Button
            children="Neutral Large"
            size="large"
            variant="neutral"
        />
    </div >
);