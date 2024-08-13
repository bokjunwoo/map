import { Radio } from '@mui/material';

type Props = {
  value: string;
  selectedValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioUI = ({ value, selectedValue, handleChange }: Props) => {
  return (
    <Radio
      size="small"
      checked={selectedValue === value}
      onChange={handleChange}
      value={value}
      name={`radio_${value}`}
      inputProps={{ 'aria-label': value }}
      sx={{ ml: -1 }}
    />
  );
};

export default RadioUI;
