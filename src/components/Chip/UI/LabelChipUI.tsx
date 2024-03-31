import { Chip } from '@mui/material';

type LabelChipUIProps = {
  label: string;
  rgb: string;
};

const LabelChipUI = ({ label, rgb }: LabelChipUIProps) => {
  return (
    <Chip
      component="span"
      label={label}
      sx={{
        fontSize: '0.7rem',
        fontWeight: 600,
        height: 20,
        color: `rgb(${rgb})`,
        bgcolor: `rgba(${rgb}, 0.2)`,
      }}
    />
  );
};

export default LabelChipUI;
