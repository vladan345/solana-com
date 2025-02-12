import { Meta, StoryObj } from '@storybook/react';

import { Carousel } from '.';

const meta: Meta<typeof Carousel> = {
    title: 'Components/Carousel',
    component: Carousel,
    parameters: {
        controls: {
            //   sort: 'requiredFirst',
            //   exclude: ['headingAs', 'variant'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const standard: Story = {
    args: {
        autoplay: true,
        autoplaySpeed: 4000,
        slides: [{
            image: {
                src: "https://via.placeholder.com/800x400",
                alt: "Slide One"
            },
            label: "Slide One Label",
            headline: "Slide One Headline",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut diam vel ligula dictum ornare. Maecenas accumsan tristique ornare. Proin volutpat quis ipsum et auctor. Nunc nec vulputate magna.",
            button: {
                label: "Button CTA",
                url: "#"
            }
        },
        {
            image: {
                src: "https://via.placeholder.com/800x400",
                alt: "Slide Two"
            },
            label: "Slide Two Label",
            headline: "Slide Two Headline",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut diam vel ligula dictum ornare. Maecenas accumsan tristique ornare. Proin volutpat quis ipsum et auctor. Nunc nec vulputate magna.",
            button: {
                label: "Button CTA",
                url: "#"
            }
        },
        {
            image: {
                src: "https://via.placeholder.com/800x400",
                alt: "Slide Three"
            },
            label: "Slide Three Label",
            headline: "Slide Three Headline",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut diam vel ligula dictum ornare. Maecenas accumsan tristique ornare. Proin volutpat quis ipsum et auctor. Nunc nec vulputate magna.",
            button: {
                label: "Button CTA",
                url: "#"
            }
        }]
    },
};