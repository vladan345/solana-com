import React from 'react';

export const traverseJsxTree = (
  jsx: JSX.Element[],
  callback: (element: JSX.Element) => Maybe<JSX.Element>
): JSX.Element[] => {
  return jsx.map(el => {
    const newElement = callback(el);

    if (newElement) {
      return newElement;
    }

    if (el.props && el.props.children) {
      const newChildren = React.Children.map(el.props.children, child => {
        if (React.isValidElement(child)) {
          return traverseJsxTree([child], callback)[0];
        }
        return child;
      });

      return React.cloneElement(el, { ...el.props, children: newChildren });
    }

    return el;
  });
};
