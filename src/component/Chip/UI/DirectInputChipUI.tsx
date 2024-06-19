import { Chip } from '@mui/material';

type DirectInputChipUIProps = {
  onClick: () => void;
};

const DirectInputChipUI = ({ onClick }: DirectInputChipUIProps) => {
  return (
    <Chip
      label="직접 입력"
      color="warning"
      sx={{
        color: '#FFFFFF',
      }}
      onClick={onClick}
    />
  );
};

export default DirectInputChipUI;
