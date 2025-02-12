import React, { FC, useState, useMemo } from 'react';
import { cssMerge } from '../../utils/cssMerge';
import type { NewsletterFormProps } from '../NewsletterForm';
import { Form, useIterableSignUp } from '../../utils/hooks/useIterableForm';
import { Input } from '../../molecules/Input';
import { cva } from 'class-variance-authority';

interface NewsletterMultipleListsForm {
    separateOnMobile: boolean,
    containerClass?: string,
    placeholder?: string,
    emailError?: string,
    submitError?: string,
    successMessage?: string,
    newsletterOption: Array<NewsletterListOptions>
}

interface NewsletterListOptions extends NewsletterFormProps {
    listName: string;
}

export const listWrapper = cva(
    [
      'tw-absolute'
    ],
    {
      variants: {
        type: {
          standard: [
              'tw-top-1/2',
              '-tw-translate-y-1/2',
              'tw-right-[150px]'
          ],
          separateOnMobile: [
              'tw-top-[15px]',
              'tw-right-[10px]',
              'md:tw-top-1/2',
              'md:-tw-translate-y-1/2',
              'md:tw-right-[150px]'
          ]
        },
      },
    }
);
  
export const list = cva(
    [
      'newsletter-selection-list',
      'tw-absolute',
      'tw-hidden',
      '-tw-z-1',
      'tw-flex',
      'tw-overflow-y-auto',
      'tw-overflow-x-hidden',
      'tw-max-h-[400px]',
      'tw-min-w-[250px]',
      'tw-flex-col',
      'tw-rounded-xl',
      'tw-bg-gray-850'
    ],
    {
      variants: {
        type: {
          standard: [
              'tw-left-1/2',
              '-tw-translate-x-1/2',
          ],
          separateOnMobile: [
              'tw-right-0',
              'md:tw-left-1/2',
              'md:-tw-translate-x-1/2',
          ]
        },
      },
    }
);
  

export const NewsletterMultipleListsForm: FC<NewsletterMultipleListsForm> = ({ separateOnMobile, placeholder, emailError, submitError, successMessage = 'Success! Thank you for signing up!', newsletterOption }) => {
    // Since we'll need to control the checked property via state, create an initial checkbox state array of objects
    const initialCheckboxState = newsletterOption.map( (newsletter, index) => ({
        listName: newsletter.listName ?? 'list-name',
        checked: index === 0,
        formId: newsletter.formId ?? 'form-id'
    }));

    // Sets the state of each checkbox and allows us to control when a user tries to uncheck a checkbox when theres only 1
    const [checkBoxes, setCheckBoxes] = useState(initialCheckboxState);

    // Array of formIds that will be passed to the newsletter component to be submitted to iterable for subscription
    const [formIds, setFormIds] = useState([`${newsletterOption[0].formId ?? 'form-id'}`]);

    const separateOnMobileClasses = separateOnMobile ? "tw-flex tw-flex-col tw-justify-center" : "tw-grid";

    const { actionUrl, onSubmitMultiple, error, onValueChange, values, setError, isSuccess } = useIterableSignUp({
        formIds
    });
    
    // Handle adding/removing form ids from our formIds state array to be sent to the newsletter component
    const handleNewsletterItemClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setError({lists: ''});

        const target = (event.target as HTMLElement);

        // Get the index of the checkbox by looking at the unique form id which is set as the value on each checkbox
        const checkBoxIndex = checkBoxes.findIndex((box) => box.formId === target.dataset.value);
        const copyOfCheckboxState = [...checkBoxes];

        const isChecked = copyOfCheckboxState[checkBoxIndex].checked;

        const amountOfCheckedBoxes = checkBoxes.filter(box => box.checked);

        if ( isChecked && amountOfCheckedBoxes.length === 1 ) {
            // setErrorMessage('At least one newsletter list must be checked!');
            setError({lists: 'At least one newsletter list must be checked!'});
            return;
        }

        // A copy of the current state of formIds
        const formIdState = [...formIds];
        // The formID of the checkbox
        const formIdOfCheckbox = copyOfCheckboxState[checkBoxIndex].formId;

        if ( isChecked ) {
            // handle unchecking a checkbox
            copyOfCheckboxState[checkBoxIndex] = {
                ...copyOfCheckboxState[checkBoxIndex],
                checked: false
            };

            // Remove the unchecked formid from our formIds state array
            if (formIdState.includes(formIdOfCheckbox)) {
                setFormIds(formIdState.filter(id => {
                    return id !== formIdOfCheckbox
                }));
            }

        } else {
            // Handling checking a checkbox
            copyOfCheckboxState[checkBoxIndex] = {
                ...copyOfCheckboxState[checkBoxIndex],
                checked: true
            };

            // If we've just checked the checkbox and the formIds state array does not contain the new formId, add it
            if (!formIdState.includes(formIdOfCheckbox)) {
                formIdState.push(formIdOfCheckbox)
                setFormIds(formIdState);
            }
        }

        setCheckBoxes(copyOfCheckboxState);
    };

    // will be used to hide and show the list of newsletters
    const newsletterSelectionOnClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        if (event.target) {
            const target = (event.target as HTMLButtonElement);
            
            const dropdown = target.nextElementSibling;

            if (dropdown && dropdown.classList.contains('newsletter-dropdown-list')) {
                if ( dropdown.classList.contains('tw-hidden')) {
                    dropdown.classList.remove('tw-hidden');
                    dropdown.classList.remove('-tw-z-1');
    
                    dropdown.classList.add('tw-block');
                    dropdown.classList.add('tw-z-20');
                } else  {
                    dropdown.classList.remove('tw-block');
                    dropdown.classList.remove('tw-z-20');
    
                    dropdown.classList.add('tw-hidden');
                    dropdown.classList.add('-tw-z-1');
                }
            }
        }
    };

    const newsletterSelection = (
        <div className={listWrapper({type: separateOnMobile ? 'separateOnMobile' : 'standard'})}>
            <button onClick={newsletterSelectionOnClick} className="tw-flex tw-justify-center tw-items-center tw-bg-common-black tw-rounded-full tw-w-[40px] tw-h-[40px] tw-group hover:tw-bg-common-white" aria-label="Select newsletter lists">
                <svg className="tw-pointer-events-none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="tw-stroke-gray-500 group-hover:tw-stroke-gray-950" d="M21 12L9 12M21 6L9 6M21 18L9 18M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM5 6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6ZM5 18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17C4.55228 17 5 17.4477 5 18Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className={`newsletter-dropdown-list ${list({type: separateOnMobile ? 'separateOnMobile' : 'standard'})}`}>
                {checkBoxes.map((checkbox, index) => (
                    <div key={index} className="tw-relative">
                        {checkbox.checked ? 
                            <svg className="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-[15px] tw-pointer-events-none" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0.5H2C0.89 0.5 0 1.4 0 2.5V16.5C0 17.6 0.89 18.5 2 18.5H16C17.11 18.5 18 17.6 18 16.5V2.5C18 1.4 17.11 0.5 16 0.5ZM7 14.5L2 9.5L3.41 8.09L7 11.67L14.59 4.08L16 5.5L7 14.5Z" fill="rgba(255, 255, 255, 0.4)"/>
                            </svg>
                            :
                            <svg className="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-[15px] tw-pointer-events-none" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 2.5V16.5H2V2.5H16ZM16 0.5H2C0.9 0.5 0 1.4 0 2.5V16.5C0 17.6 0.9 18.5 2 18.5H16C17.1 18.5 18 17.6 18 16.5V2.5C18 1.4 17.1 0.5 16 0.5Z" fill="rgba(255, 255, 255, 0.4)"/>
                            </svg>}
                            <button onClick={handleNewsletterItemClick}  data-for={checkbox.listName} data-value={checkbox.formId} data-id={checkbox.listName} className="tw-w-full tw-cursor-pointer tw-text-md tw-leading-tight tw-py-3 tw-pl-10 tw-pr-5 hover:tw-bg-gray-750">{checkbox.listName ?? 'List Name'}</button>
                    </div>
                ))}
            </div>
        </div>);

    const isValid = useMemo(() => {
        const veryBasicEmailCheck = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
        if (values.email) {
          if (!veryBasicEmailCheck.test(values.email)) {
            setError({ email: emailError ?? `Please enter a valid email address` });
          }
          return veryBasicEmailCheck.test(values.email);
        }
        return false;
      }, [values.email]);
    const success = isValid && isSuccess && successMessage;

    return (
        <>
            <div className="tw-mb-5">
                <Form className={`tw-relative tw-z-1`} action={actionUrl} onSubmit={e => {
                    if (Array.isArray(formIds)) {
                        onSubmitMultiple(e, { submitError })
                    }
                }}>
                    <Input
                        size="md"
                        name="email"
                        className={cssMerge('sm:tw-w-full md:tw-min-w-[600px]', separateOnMobileClasses)}
                        helperText={error.submission || error.email || error.lists || success}
                        onChange={onValueChange}
                        error={!!error.submission || !!error.email}
                        placeholder={placeholder}
                        button={{hierarchy: 'secondary',
                        label: 'Sign Up',}}
                        customIcon={newsletterSelection}
                        separateOnMobile={separateOnMobile}
                    />
                </Form>
            </div>
        </>
    );
}