import { FeatureCardProps } from '../FeatureCard';

export const splitAndColorArray = (arr: FeatureCardProps[]): FeatureCardProps[][] => {
  const result: FeatureCardProps[][] = [[], []];
  const half = arr.length / 2;
  const splitIndex = Math.floor(half);

  arr.forEach((obj: FeatureCardProps, index: number) => {
    if (index < splitIndex) {
      result[0].push(obj);
    } else {
      result[1].push(obj);
    }
  });

  return result;
};
