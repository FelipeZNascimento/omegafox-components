import React from 'react';
import { render } from '@testing-library/react';
import { NewsCard } from './NewsCard';
import { INewsCardProps } from './types';

describe('<NewsCard />', () => {
  const renderComponent = ({
    title,
    resume,
    date,
    link,
    image
  }: INewsCardProps) =>
    render(
      <NewsCard
        title={title}
        resume={resume}
        date={date}
        link={link}
        image={image}
      />
    );

  it('should render', () => {
    const { container } = renderComponent({
      title: 'title',
      resume: 'resume',
      date: 'date ago',
      link: '#',
      image:
        'https://s2.glbimg.com/8_XbuLD2d1XCpSP9pUOw4sc7CdY=/540x304/top/smart/filters:max_age(3600)/https://s01.video.glbimg.com/deo/vi/27/10/10971027'
    });

    expect(container).toMatchSnapshot();
  });
});
