import { useState } from 'react';

const useToggle = (initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleOpen = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return [isOpen, toggleOpen] as const;
};

export default useToggle;
