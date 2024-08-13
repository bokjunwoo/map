import { useState } from 'react';

const useRadio = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return [value, handleChange] as const;
};

export default useRadio;
