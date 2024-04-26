import { useState } from 'react';

type UseUpDownButtonProps = {
  initialValue: number;
};

const useUpDownButton = ({ initialValue }: UseUpDownButtonProps) => {
  const positiveThreshold = Math.ceil((initialValue / 10) * 4);
  const negativeThreshold = Math.ceil((initialValue / 10) * 2);

  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount: number) =>
      Math.min(prevCount + 1, initialValue + positiveThreshold)
    );
  };

  const decrement = () => {
    setCount((prevCount: number) =>
      Math.max(prevCount - 1, initialValue - negativeThreshold)
    );
  };

  return {
    count,
    increment,
    decrement,
  };
};

export default useUpDownButton;
