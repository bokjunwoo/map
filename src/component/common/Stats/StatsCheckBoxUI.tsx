import { Box, Typography } from '@mui/material';
import StatsCheckBoxStyle from './style/StatsCheckBoxStyle';

type StatsCheckBoxUIProps = {
  checkBoxOption: CheckBoxOption;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StatsCheckBoxUI = ({
  checkBoxOption,
  handleChange,
}: StatsCheckBoxUIProps) => {
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

      <StatsCheckBoxStyle
        aria-label={checkBoxOption.name}
        sx={{
          border: `1px solid ${checkBoxOption.bgcolor}`,
        }}
        checked={checkBoxOption.checked}
        onChange={handleChange}
        name={checkBoxOption.name}
      />
    </Box>
  );
};

export default StatsCheckBoxUI;
