import { useState } from 'react';
import FAQRowUI from './UI/FAQRowUI';

interface FAQRowProps {
  FAQ: FAQI;
}

const FAQRow = ({ FAQ }: FAQRowProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return <FAQRowUI FAQ={FAQ} isOpen={isOpen} toggleOpen={toggleOpen} />;
};

export default FAQRow;
