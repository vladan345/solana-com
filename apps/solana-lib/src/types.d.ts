export interface ImageProps {
  src: string;
  alt?: string;
}

export interface PersonProps {
  value?: any;
  thumbnail?: ImageProps;
  name?: string;
  role?: string;
  company?: string;
}

export interface CompanyProps {
  logo?: ImageProps;
  name?: string;
  website?: string;
}

declare global {
  type Maybe<T> = T | null;
}
