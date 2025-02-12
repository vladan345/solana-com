import { useContext, useEffect } from 'react';
import { TocContext } from './TocProvider';
import { toKebabCase } from '../../../utils/toKebabCase';

export const useToc = (ref: React.MutableRefObject<HTMLElement | null>) => {
  const { setHeadings, setActiveId } = useContext(TocContext);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const headingsFromContent = ref.current.querySelectorAll(
      '.tw-html_parser h1, .tw-html_parser h2, .tw-html_parser h3'
    );

    // reduce over map to prevent undefined values
    const headingStrings = Array.from(headingsFromContent).reduce<string[]>((result, heading) => {
      if (heading.textContent) {
        result.push(heading.textContent);
      }
      return result;
    }, []);

    setHeadings(headingStrings);
    setActiveId(toKebabCase(headingStrings[0])); // set first heading as active by default

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const targetElement = entry.target;
          const tag = targetElement.tagName;
          const topHeading = tag === 'H3' || tag === 'H2' || tag === 'H1';
          if (topHeading && entry.isIntersecting) {
            setActiveId(toKebabCase(targetElement.textContent));
          }
        });
      },
      // offset to trigger intersection around top of the page
      { rootMargin: '0px 0px -75% 0px' }
    );

    headingsFromContent.forEach(headingElement => {
      observer.observe(headingElement);
    });
  }, []);
};
