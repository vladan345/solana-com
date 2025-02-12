import { useEffect, useState } from 'react';
import { screens } from '../../theme/screens';

const useMediaQuery = (input: 'sm' | 'md' | 'lg' | 'xl' | '2xl'): boolean => {
  const query = `(min-width: ${screens[input]})`;

  const getMatches = (query: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    // Default to false during server-side rendering
    return false;
  };

  // Initialize matches with undefined to defer its value assignment until after mount
  const [matches, setMatches] = useState<boolean | undefined>(undefined);

  const handleChange = () => {
    setMatches(getMatches(query));
  };

  useEffect(() => {
    // Update matches once the component is mounted on the client
    handleChange();

    const matchMedia = window.matchMedia(query);
    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return !!matches;  // Converts undefined to false
};

export default useMediaQuery;
