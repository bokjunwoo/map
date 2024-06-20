import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

const useSelectState = (initialValue: number) => {
  const [value, setValue] = useState<number>(initialValue);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setValue(Number(event.target.value));
  };

  return [value, handleChange] as const;
};

export default useSelectState;
