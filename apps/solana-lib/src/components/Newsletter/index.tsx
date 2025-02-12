import React, { FC, useMemo } from 'react';
import { Input, InputProps } from '../../molecules/Input';
import { Form, useIterableSignUp } from '../../utils/hooks/useIterableForm';
import { cssMerge } from '../../utils/cssMerge';

export interface NewsletterSignUpProps extends InputProps {
  newsLetter?: boolean;
  formId?: string;
  submitError?: string;
  emailError?: string;
  successMessage?: string;
  formIds?: string[];
  additionalHtml?: React.ReactNode,
  formClasses?: string
}

export const NewsletterSignUp: FC<NewsletterSignUpProps> = ({
  formId,
  className,
  size = 'md',
  button = {
    hierarchy: 'secondary',
    label: 'Sign Up',
  },
  emailError = 'Please enter a valid email address',
  submitError = 'Something went wrong, please try again',
  successMessage = 'Success! Thank you for signing up!',
  ...props
}) => {
  const { actionUrl, onSubmit, error, onValueChange, values, setError, isSuccess } = useIterableSignUp({
    formId
  });
  const isValid = useMemo(() => {
    const veryBasicEmailCheck = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (values.email) {
      if (!veryBasicEmailCheck.test(values.email)) {
        setError({ email: emailError });
      }
      return veryBasicEmailCheck.test(values.email);
    }
    return false;
  }, [values.email]);
  const success = isValid && isSuccess && successMessage;

  return (
    <Form action={actionUrl} onSubmit={e => {onSubmit(e, { submitError })}}>
      <Input
        size={size}
        name="email"
        className={cssMerge('tw-w-full sm:tw-w-fit', className)}
        button={button}
        helperText={error.submission || error.email || success}
        onChange={onValueChange}
        error={!!error.submission || !!error.email}
        {...props}
      />
    </Form>
  );
};
