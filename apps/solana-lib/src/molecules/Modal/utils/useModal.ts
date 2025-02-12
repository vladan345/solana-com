import useOpenState from '../../../utils/hooks/useOpenState';

export const useModal = <T extends HTMLElement>(ref: React.RefObject<T>, defaultState = false) => {
  const [isOpen, setIsOpen] = useOpenState(ref, defaultState);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleModal = () => {
    isOpen ? closeModal() : openModal();
  };

  return [isOpen, { openModal, closeModal, toggleModal }] as const;
};
