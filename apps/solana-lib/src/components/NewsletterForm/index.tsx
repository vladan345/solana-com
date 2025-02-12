import React, { FC } from 'react';
import { NewsletterSignUp } from '../Newsletter';
import type { NewsletterSignUpProps } from '../Newsletter';
import { cssMerge } from '../../utils/cssMerge';

export interface NewsletterFormProps extends NewsletterSignUpProps {
    containerClass?: string,
    separateOnMobile: boolean
};

export const NewsletterForm: FC<NewsletterFormProps> = ({ formId, placeholder, emailError, submitError, successMessage, containerClass, separateOnMobile }) => {
    const separateOnMobileClasses = separateOnMobile ? "tw-flex tw-flex-col tw-justify-center" : "tw-grid";

    return (
        <div className="tw-w-full">
            <NewsletterSignUp
                formId={formId}
                placeholder={placeholder}
                emailError={emailError}
                submitError={submitError}
                successMessage={successMessage}
                className={cssMerge('sm:tw-w-full md:tw-min-w-[600px]', containerClass, separateOnMobileClasses)}
                size="md"
                separateOnMobile={separateOnMobile}
            />
        </div>
    )
}