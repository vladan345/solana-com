import React, { useState } from "react";
import { cssMerge } from '../../utils/cssMerge';
import { slider, sliderCard, sliderCardImg, imgInsideSliderCardImg, sliderCardBody, sliderCardLabel, sliderCardHeadline } from "./Carousel.styles";
import styles from "./CarouselSlick.module.scss";
import Slider from "react-slick";
import Image from "next/image";
import { Button } from "../../molecules/Button";
import { ChevronLeft, ChevronRight } from "react-feather";
import { HtmlParser } from "../RichTextComponents/HtmlParser";

interface CarouselProps {
    autoplay: boolean;
    autoplaySpeed?: number;
    slides?: CarouselSlideProps[];
}

interface CarouselSlideProps {
    image?: {
        src?: string;
        alt?: string;
    };
    label?: string;
    headline?: string;
    body?: string;
    button?: {
        label?: string;
        url?: string;
    }
}

export const Carousel = ({ autoplay, autoplaySpeed, slides }: CarouselProps) => {
    // State to manage visibility of the carousel
    const [isInitialized, setIsInitialized] = useState(false);

    const handleInit = () => {
        setIsInitialized(true);
    };

    const PrevArrow = (props: any) => {
        const { className, style, onClick } = props;
        return <ChevronLeft className={className} style={style} onClick={onClick} />;
    };
    const NextArrow = (props: any) => {
        const { className, style, onClick } = props;
        return <ChevronRight className={className} style={style} onClick={onClick} />;
    };

    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: autoplay,
        autoplaySpeed: autoplay ? autoplaySpeed : 0,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        onInit: handleInit, // Add the onInit handler
    };

    if (!slides) return null;

    return (
        <div className={cssMerge(styles.solCarousel, 'tw-overflow-hidden')} style={{ visibility: isInitialized ? 'visible' : 'hidden' }}>
            <div className="sm:tw-px-12 tw-w-full tw-max-w-6xl mx-auto">
                <div className={cssMerge(slider())}>
                    <Slider {...settings}>
                        {slides.map((slide, index) => (
                            <div className={sliderCard()} key={index}>
                                {slide.image && slide.image.src && (
                                    <div className={sliderCardImg()}>
                                        <Image
                                            src={slide.image.src}
                                            alt={slide.image.alt || ''}
                                            fill
                                            placeholder='blur'
                                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAAfE+zUAAAAHElEQVQImWP4//8/w38GIAXDIBKE0DHxglMKAAIMAB8FhS2+8qo8AAAAAElFTkSuQmCC'
                                            className={imgInsideSliderCardImg()}
                                        />
                                    </div>
                                )}
                                <div className={sliderCardBody()}>
                                    {slide.label && (
                                        <span className={cssMerge('text-uppercase smaller', sliderCardLabel())}>{slide.label}</span>
                                    )}
                                    {slide.headline && (
                                        <h2 className={cssMerge("h5 mt-4 fw-normal", sliderCardHeadline())}>{slide.headline}</h2>
                                    )}
                                    {slide.body && (
                                        <HtmlParser classes="mb-5 small tw-text-pretty" rawHtml={slide.body} />
                                    )}
                                    {slide.button && slide.button.url && slide.button.label && (
                                        <Button {...slide.button} aria-label={slide.headline}>
                                            {slide.button.label}
                                            <span className={`tw-sr-only`}> - {slide.headline}</span>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};