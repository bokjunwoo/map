import { useState } from 'react';

const useValidatedInput = (regex: RegExp, maxAllowedValue: number) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (regex.test(newValue)) {
      const numericValue = Number(newValue);
      setValue(numericValue > maxAllowedValue ? maxAllowedValue : numericValue);
    }
  };

  return [value, handleChange] as const;
};

export default useValidatedInput;
