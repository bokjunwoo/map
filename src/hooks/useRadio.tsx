import { useState } from 'react';

const useRadio = (initialValue: number) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return [value, handleChange] as const;
};

export default useRadio;
