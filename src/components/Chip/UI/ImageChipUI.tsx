import { Avatar, Box, Chip } from '@mui/material';
import { symbolsColor } from '../../../data/color';

type ImageChipProps = {
  value: string;
  isSelected: boolean;
  onToggle: () => void;
};

const ImageChipUI = ({ value, isSelected, onToggle }: ImageChipProps) => {
  const backgroundColor = symbolsColor[value].bgColor;

  return (
    <Box>
      <Chip
        onClick={onToggle}
        sx={{
          cursor: 'pointer',
          outline: isSelected ? '1px solid #3366FF' : 'none',
          color: isSelected ? '#3366FF' : '#333333',
          bgcolor: { backgroundColor },
          marginRight: 1,
          marginBottom: 1,
          pl: 0.8,
          '& .MuiChip-label': {
            ml: -0.3,
          },
          fontSize: 14,
          height: '36.5px',
          ':hover': {
            outline: '1px solid rgba(51,102,255, 0.3)',
            bgcolor: backgroundColor,
            height: '36.5px',
          },
        }}
        avatar={
          <Avatar
            src={require(`../../../assets/region_icon/${value}.png`)}
            variant="rounded"
            sx={{ p: 0.15 }}
          />
        }
        label={value}
      />
    </Box>
  );
};

export default ImageChipUI;
