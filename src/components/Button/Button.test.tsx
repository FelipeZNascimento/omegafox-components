import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Button } from './Button';
import { ButtonProps } from './types';

describe('ButtonComponent', () => {
  const renderComponent = ({
    children,
    icon,
    isDarkMode,
    isDisabled,
    isSelected,
    leftIcon,
    size,
    shadowed,
    shape,
    tooltip,
    variant
  }: Partial<ButtonProps>) =>
    render(
      <Button
        icon={icon}
        isDarkMode={isDarkMode}
        isDisabled={isDisabled}
        isSelected={isSelected}
        leftIcon={leftIcon}
        size={size}
        shadowed={shadowed}
        shape={shape}
        tooltip={tooltip}
        variant={variant}
        onClick={jest.fn}
      >
        {children}
      </Button>
    );

  it('should render', () => {
    const buttonText = 'Click';
    const { container } = renderComponent({ children: buttonText });

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with default values', () => {
    const buttonText = 'Click';
    const { getByTestId, queryByTestId } = renderComponent({
      children: buttonText
    });

    const button = getByTestId('test-button');
    const buttonChildren = getByTestId('test-button__children');
    const buttonIcon = queryByTestId('test-button__icon-left');

    expect(button).toHaveClass('shadowed');
    expect(button).toHaveClass('rounded');
    expect(button).toHaveClass('enabledLight');
    expect(button).toHaveClass('containerMedium');
    expect(button).toHaveClass('primary');

    expect(buttonIcon).toBeNull();
    expect(buttonChildren).toHaveTextContent(buttonText);
  });

  it('should render left icon correctly', () => {
    const buttonText = 'Click';
    const { getByTestId } = renderComponent({
      children: buttonText,
      leftIcon: true,
      icon: <FontAwesomeIcon icon={faChevronLeft} size="lg" />
    });
    const buttonIcon = getByTestId('test-button__icon-left');

    expect(buttonIcon).toBeVisible();
    expect(buttonIcon).toHaveClass('iconLeft');
  });

  it('should render right icon correctly', () => {
    const buttonText = 'Click';
    const { getByTestId } = renderComponent({
      children: buttonText,
      leftIcon: false,
      icon: <FontAwesomeIcon icon={faChevronLeft} size="lg" />
    });
    const buttonIcon = getByTestId('test-button__icon-right');

    expect(buttonIcon).toBeVisible();
    expect(buttonIcon).toHaveClass('iconRight');
  });

  it('should callback on click', () => {
    const onClickFn = jest.fn();
    const buttonText = 'Click';

    const { getByTestId } = render(
      <Button onClick={onClickFn}>{buttonText}</Button>
    );

    fireEvent.click(getByTestId('test-button'));
    expect(onClickFn).toHaveBeenCalled();
  });
});
