import React, { createContext, useState } from 'react';

interface TocContext {
  headings: Maybe<string[]>;
  activeId: Maybe<string>;
  setHeadings: React.Dispatch<React.SetStateAction<Maybe<string[]>>>;
  setActiveId: React.Dispatch<React.SetStateAction<Maybe<string>>>;
}

export const TocContext = createContext<TocContext>({} as TocContext);

export const TocProvider = ({ children }: { children: React.ReactNode }) => {
  const [headings, setHeadings] = useState<Maybe<string[]>>(null);
  const [activeId, setActiveId] = useState<Maybe<string>>(null);

  return (
    <TocContext.Provider
      value={{
        headings,
        activeId,
        setHeadings,
        setActiveId,
      }}
    >
      {children}
    </TocContext.Provider>
  );
};
