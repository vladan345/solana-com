import React, { createContext, useState } from 'react';

interface CarouselContext {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const CarouselContext = createContext<CarouselContext>({} as CarouselContext);

export const CarouselProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <CarouselContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};
