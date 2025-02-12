import React, { ChangeEvent, ComponentPropsWithoutRef, FormEvent, useCallback, useState } from 'react';

const ITERABLE_BASE_URL = 'https://links.iterable.com/lists/publicAddSubscriberForm?publicIdString=';

export const sendFormRequest = async (actionUrl: string, dataObject: Record<string, string>) => {
  const data = new FormData();

  Object.keys(dataObject).map(key => {
    data.append(key, dataObject[key]);
  });

  const request = new Request(actionUrl, {
    method: 'POST',
    body: data,
  });

  const response = await fetch(request);

  if (!response.ok) {
    await Promise.reject(response);
  }
};

export const sendMultipleFormRequests = async (actionUrl: string[], dataObject: Record<string, string>) => {
  const data = new FormData();

  Object.keys(dataObject).map(key => {
    data.append(key, dataObject[key]);
  });

  if (Array.isArray(actionUrl)) {
    const requests = actionUrl.map(request => new Request(request, {
      method: 'POST',
      body: data
    }));

    const allFetchRequests = requests.map(request => fetch(request));

    await Promise.allSettled(allFetchRequests).then((results) => {
      console.log(results);
    });
  }
};

export const Form = ({ children, target = '_blank', method = 'post', ...props }: ComponentPropsWithoutRef<'form'>) => {
  return (
    <form method={method} target={target} {...props}>
      {children}
    </form>
  );
};

export const useIterableSignUp = ({
  formId,
  initialValues = {},
  formIds = ['form-id']
}: {
  formId?: string;
  initialValues?: Record<string, string>;
  formIds?: string[]
}) => {
  const [formState, setFormState] = useState(initialValues);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const actionUrl = `${ITERABLE_BASE_URL}${formId}`;
  const actionUrls = formIds.length > 0 ? formIds.map(id => `${ITERABLE_BASE_URL}${id}`) : [];

  const onValueChange = React.useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));

    setError(prevState => ({
      ...prevState,
      [name]: '',
      submission: '',
    }));

    setIsSubmitting(false);
    setIsSuccess(false);
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>, { submitError }: { submitError?: string } = {}) => {
      e.preventDefault();
      setIsSubmitting(true);
      setIsSuccess(false);

      if (Object.keys(formState).length == 0) {
        setError({...error, submission: 'You must fill out the required fields!'});
        return;
      }

      if (typeof actionUrl === 'string') {
        try {
          setIsLoading(true);
          await sendFormRequest(actionUrl, formState);
          setIsSuccess(true);
        } catch (err) {
          setError({ ...error, submission: submitError || 'Something went wrong, please try again' });
        } finally {
          setIsSubmitting(false);
          setIsLoading(false);
        }
      }
    },
    [formState, actionUrl, error]
  );

  const onSubmitMultiple = useCallback(
    async (e: FormEvent<HTMLFormElement>, { submitError }: { submitError?: string } = {}) => {
      e.preventDefault();
      setIsSubmitting(true);
      setIsSuccess(false);

      if (Object.keys(formState).length == 0) {
        setError({...error, submission: 'You must fill out the required fields!'});
        return;
      }

      if (Array.isArray(actionUrls)) {
        try {
          setIsLoading(true);
          await sendMultipleFormRequests(actionUrls, formState);
          setIsSuccess(true);
        } catch (err) {
          setError({ ...error, submission: submitError || 'Something went wrong, please try again' });
        } finally {
          setIsSubmitting(false);
          setIsLoading(false);
        }
      }
    },
    [formState, actionUrl, error]
  )

  return {
    actionUrl,
    values: formState,
    onValueChange,
    onSubmit,
    setError,
    error,
    isSuccess,
    isLoading,
    isSubmitting,
    onSubmitMultiple
  };
};
