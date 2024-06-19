import { Box } from '@mui/material';
import BurningFieldSliderStyle from './style/BurningFieldSliderStyle';

type BurningFieldSliderUIProps = {
  sliderValue: number;
  handleSliderChange: (event: Event, newValue: number | number[]) => void;
};

const BurningFieldSliderUI = ({
  sliderValue,
  handleSliderChange,
}: BurningFieldSliderUIProps) => {
  return (
    <Box sx={{ mr: 1, ml: 1 }}>
      <BurningFieldSliderStyle
        value={sliderValue}
        onChange={handleSliderChange}
        step={1}
        marks
        min={0}
        max={10}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default BurningFieldSliderUI;
