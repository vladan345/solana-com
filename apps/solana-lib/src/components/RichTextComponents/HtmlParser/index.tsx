import React, { FC } from 'react';
import parse from 'html-react-parser';
import Link from '../../../molecules/Link';
import { traverseJsxTree } from '../../../utils/traverseJsxTree';
import { toKebabCase } from '../../../utils/toKebabCase';

interface HTMLProps {
  rawHtml: string;
  classes?: string;
}

export const HtmlParser: FC<HTMLProps> = ({ rawHtml, classes }) => {
  // Guard for when Builder's Api sends back an object instead of a string.
  if (rawHtml === typeof 'object') {
    return null;
  }

  let reactNodes = parse(rawHtml);

  /**
   * Since reactNodes can be a string, a React.JSX.Element, or React.JSX.Element[] - and because traverseJsxTree()
   * only accepts React.JSX.Element[], we need to handle what will happen when a user only adds one line of text to the 
   * rich text editor, which will only return a React.JSX.Element
   * 
   * If the user already has added more than one line of text, using reactNodes as the param for traverseJsxTree() is fine
   * If the user only has added one line of text - set that parsed Element inside an array
   */
  if (!Array.isArray(reactNodes)) {
    if ( React.isValidElement(reactNodes) ) {
      reactNodes = [reactNodes];
    }
  }

  // In order to prevent parameter type issues (since reactNodes can still be a string, ensure it is an array)
  if ( !Array.isArray(reactNodes) ) {
    return null;
  }

  const parsedNodes = traverseJsxTree(reactNodes, node => {
    switch (node.type) {
      case 'a':
        return <Link {...node.props} />;
      case 'h1':
      case 'h2':
      case 'h3':
        const Heading = node.type;
        return <Heading {...node.props} id={toKebabCase(node.props.children)} className="tw-scroll-mt-28" />;
      case 'br':
      default:
        return null;
    }
  });

  const additionalClases = classes ? `tw-html_parser--has-classes ${classes}` : '';

  return (
    <div className="tw-scroll-smooth">
      <div className={`tw-html_parser ${additionalClases}`}>{parsedNodes}</div>
    </div>
  );
};
