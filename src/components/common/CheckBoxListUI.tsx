import { Box, Typography, Checkbox } from '@mui/material';
import { CheckBoxOption } from '../../interface/stats';

type CheckBoxListUIProps = {
  checkBoxOption: CheckBoxOption;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBoxListUI = ({
  checkBoxOption,
  handleChange,
}: CheckBoxListUIProps) => {
  return (
    <Box sx={{ width: 100 }}>
      <Box
        sx={{
          textAlign: 'center',
          bgcolor: checkBoxOption.bgcolor,
          p: 0.5,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
      >
        <Typography variant="body2" sx={{ fontSize: 12 }}>
          {checkBoxOption.text}
        </Typography>
      </Box>

      <Checkbox
        aria-label={checkBoxOption.name}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: 25,
          border: `1px solid ${checkBoxOption.bgcolor}`,
          borderRadius: 0,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
        }}
        checked={checkBoxOption.checked}
        onChange={handleChange}
        name={checkBoxOption.name}
      />
    </Box>
  );
};

export default CheckBoxListUI;
