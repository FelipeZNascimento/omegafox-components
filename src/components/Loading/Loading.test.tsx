import React from 'react';
import { render } from '@testing-library/react';
import { Loading, loadingText } from './Loading';
import { ILoadingProps } from './types';

const spinnerUrl = './spinner.png';

describe('LoadingComponent', () => {
  const renderComponent = ({
    size,
    isOverlay,
    image = spinnerUrl
  }: Partial<ILoadingProps>) =>
    render(<Loading size={size} isOverlay={isOverlay} image={image} />);

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
      isOverlay: true
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
