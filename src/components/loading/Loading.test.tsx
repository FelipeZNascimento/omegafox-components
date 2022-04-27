import React from 'react';
import { render } from '@testing-library/react';
import { Loading, loadingText } from './Loading';
import { LoadingProps } from './types';

const spinnerUrl = './spinner.png';

describe('ButtonComponent', () => {
  const renderComponent = ({
    size,
    overlay,
    image = spinnerUrl
  }: Partial<LoadingProps>) =>
    render(<Loading size={size} overlay={overlay} image={image} />);

  it('should render', () => {
    const { container } = renderComponent({});
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with default values (regular size)', () => {
    const { getByTestId, queryByTestId } = renderComponent({});

    const loading = getByTestId('test-loading');
    const loadingImage = getByTestId('test-loading__image');
    const loadingTextComponent = queryByTestId('test-loading__text');

    expect(loading).toHaveClass('containerRegular');
    expect(loading).not.toHaveClass('overlay');
    expect(loadingImage).toHaveClass('imageRegular');
    expect(loadingImage).toHaveAttribute('src', spinnerUrl);
    expect(loadingTextComponent).toBeVisible();
    expect(loadingTextComponent).toHaveTextContent(loadingText);
  });

  it('should render correctly (small size)', () => {
    const { getByTestId, queryByTestId } = renderComponent({
      size: 'small',
      overlay: true
    });

    const loading = getByTestId('test-loading');
    const loadingImage = getByTestId('test-loading__image');
    const loadingText = queryByTestId('test-loading__text');

    expect(loading).toHaveClass('container');
    expect(loading).toHaveClass('overlay');
    expect(loadingImage).toHaveClass('imageSmall');
    expect(loadingText).toBeNull();
  });
});
