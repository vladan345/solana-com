import React from 'react';

const colorizeText = (heading: string, headingColor: string) => {
  if (!heading) {
    return heading;
  }

  const textInBrackets = new RegExp(/\{%|%\}/);

  const colorizedArray = heading.split(textInBrackets).map((segment, index) => {
    if (index % 2 === 1) {
      return (
        <span key={segment} className={headingColor}>
          {segment}
        </span>
      );
    }

    return segment;
  });

  return colorizedArray;
};

export default colorizeText;
