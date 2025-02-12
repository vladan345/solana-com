import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { parseUrl } from '../../utils/parseUrl';
import { cssMerge } from '../../utils/cssMerge';

const link = cva(['cursor-pointer'], {
  variants: {
    variant: {
      unstyled: [],
      inline: [], // TODO add inline styles
    },
    asDiv: {
      true: ['cursor-auto'],
    },
  },
  defaultVariants: {
    variant: 'unstyled',
  },
});

export interface LinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof link> {
  href: string;
}

const Link = ({ className, variant: variantProp, href, ...props }: LinkProps) => {
  const { as: Component, ...parsedUrl } = parseUrl(href);
  const asDiv = Component === 'div';
  const variant = asDiv ? 'unstyled' : variantProp;

  return (
    <Component className={cssMerge(link({ variant, className, asDiv }))} {...parsedUrl} {...props}>
      {props.children}
    </Component>
  );
};

export default Link;
