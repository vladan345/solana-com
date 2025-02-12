import React, { FC } from 'react';
import Marquee from 'react-fast-marquee';
import { GalleryImage, GalleryImageProps } from './GalleryImage';
import { Section } from '../../molecules/Section';
import { GalleryStat, GalleryStatProps, ColorOptions } from './GalleryStat';

interface CommunityGalleryProps {
  cards?: (GalleryImageProps | GalleryStatProps)[];
  square?: boolean;
}

const isImageCard = (card: GalleryImageProps): card is GalleryImageProps => 'image' in card;
const colorOptions: ColorOptions[] = ['blue', 'pink', 'green', 'yellow'];

export const CommunityGallery: FC<CommunityGalleryProps> = ({ cards, square }) => {
  if (!cards || !cards.length) {
    return null;
  }
  let statsIndex = 0;

  return (
    <Section fullWidth noPadding="noPaddingX">
      <Marquee autoFill pauseOnHover speed={50}>
        <div className="tw-grid tw-grid-rows-2 tw-grid-cols-[repeat(auto-fill, 361px)] tw-grid-flow-col-dense tw-gap-4 tw-mx-2">
          {cards.map((card, index) => {
            if (!isImageCard(card)) {
              statsIndex++;
            }
            const color: ColorOptions = colorOptions[statsIndex % colorOptions.length];

            return (
              <React.Fragment key={index}>
                {
                  isImageCard(card) ? (
                    <GalleryImage index={index} square={square} {...card} />
                  ) : (
                    <GalleryStat index={index} square={square} color={color} {...card} />
                  )
                }
              </React.Fragment>
            )
          }

          )}
        </div>
      </Marquee>
    </Section>
  );
};
