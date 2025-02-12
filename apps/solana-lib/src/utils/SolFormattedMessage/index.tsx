import { useRouter } from "next/router";
import * as React from "react";

// Define a type for your component's props
type FormattedNumberProps = {
  value: number;
  options?: Intl.NumberFormatOptions;
};

export const FormattedNumber: React.FC<FormattedNumberProps> = ({ value, options = {} }) => {
  const { locale } = useRouter();

  const formatted = React.useMemo(() => {
    try {
      return new Intl.NumberFormat(locale, options).format(value);
    } catch (error) {
      console.error(error);
      return value.toString();
    }
  }, [locale, value, options]);

  return <>{formatted}</>;
};
