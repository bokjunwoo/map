import { useState } from 'react';
import UpdateHistoryRowUI from './UI/UpdateHistoryRowUI';

interface UpdateHistoryRowProps {
  history: UpdateHistory;
}

const UpdateHistoryRow = ({ history }: UpdateHistoryRowProps) => {
  const [isOpen, setIsOpen] = useState(history.isOpen);

  const toggleOpen = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <UpdateHistoryRowUI
      history={history}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
    />
  );
};

export default UpdateHistoryRow;
