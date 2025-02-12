import { MutableRefObject, RefObject, useContext, useEffect } from 'react';
import { CarouselContext } from '../../../molecules/Carousel/utils/CarouselContext';
import { getClosestIndexToScrollLeft } from '../../../molecules/Carousel/utils/getClosestIndexToLeft';

const useCarousel = <Box extends HTMLElement, Card extends HTMLElement>(
  scrollBox: MutableRefObject<Maybe<Box>>,
  refs: RefObject<Card>[]
) => {
  const { activeIndex, setActiveIndex } = useContext(CarouselContext);

  useEffect(() => {
    const handleScroll = () => {
      const closestIndex = getClosestIndexToScrollLeft(scrollBox, refs);
      setActiveIndex(closestIndex);
      if (scrollBox.current) {
        scrollBox.current.style.scrollBehavior = 'smooth';
        const { scrollLeft } = scrollBox.current;
        const lastItem = refs[refs.length - 1].current;
        if (lastItem) {
          const lastItemLeft = lastItem.offsetLeft;
          const scrollBoxLeft = scrollLeft;

          if (lastItemLeft < scrollBoxLeft) {
            scrollBox.current.style.scrollBehavior = 'auto'; // prevents jitters when hitting last item
            scrollBox.current.scrollLeft = lastItemLeft;
          }
        }
      }
    };

    if (scrollBox.current) {
      scrollBox.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollBox.current) {
        scrollBox.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scrollBox.current, refs]);

  const isLastCard = activeIndex === refs.length - 1;
  const isFirstCard = activeIndex === 0;
  const scrollToIndex = (index: number) => {
    if (refs[index].current && scrollBox.current) {
      const position = (refs[index].current as Card).offsetLeft;
      if (!scrollBox.current.scrollWidth || position === undefined) {
        return;
      }
      scrollBox.current.scrollTo(position, 0);
    }
  };

  const onPaginationClick = (index: number) => {
    scrollToIndex(index);
  };

  const onLeftClick = () => {
    if (isFirstCard) {
      return;
    }
    scrollToIndex(activeIndex - 1);
  };

  const onRightClick = () => {
    if (isLastCard) {
      return;
    }
    scrollToIndex(activeIndex + 1);
  };

  return {
    onPaginationClick,
    onLeftClick,
    onRightClick,
    isFirstCard,
    isLastCard,
    activeIndex,
    setActiveIndex,
  };
};

export default useCarousel;
