import React, { FC } from 'react';
import { CarouselProvider } from '../../molecules/Carousel/utils/CarouselContext';
import ScrollBox, { CarouselProps } from '../../molecules/Carousel/ScrollBox';

const Carousel: FC<CarouselProps> = props => {
  return (
    <CarouselProvider>
      <ScrollBox {...props} />
    </CarouselProvider>
  );
};

export default Carousel;
