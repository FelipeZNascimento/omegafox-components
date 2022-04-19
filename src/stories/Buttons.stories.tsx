import React from "react";
import { Story } from "@storybook/react";
import { Button } from "../components";
import { ButtonProps } from "../components";
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
            onClick={() => alert('Click!')}
        />
        <Button
            children="Cancel"
            variant="danger"
            onClick={() => alert('Click!')}
        />
        <Button
            children="Iconed"
            icon={<FontAwesomeIcon icon={faCoffee} size="lg" />}
            leftIcon={true}
            onClick={() => alert('Click!')}
        />
        <Button
            icon={<FontAwesomeIcon icon={faChevronLeft} size="lg" />}
            onClick={() => alert('Click!')}
        />
        <Button
            children="Warning"
            icon={<FontAwesomeIcon icon={faTriangleExclamation} size="lg" />}
            leftIcon={false}
            variant="warning"
            onClick={() => alert('Click!')}
        />
        <Button
            isDisabled
            children="Disabled"
            onClick={() => alert('Click!')}
        />
        <Button
            children="Neutral Small"
            size="small"
            variant="neutral"
            onClick={() => alert('Click!')}
        />
        <Button
            children="Neutral Medium"
            variant="neutral"
            onClick={() => alert('Click!')}
        />
        <Button
            children="Neutral Large"
            size="large"
            variant="neutral"
            onClick={() => alert('Click!')}
        />
    </div >
);