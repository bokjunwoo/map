import { ListItem, Box } from '@mui/material';
import BurningFieldSliderUI from '../../../common/BurningFieldSliderUI';
import ListSubheaderUI from '../../../common/ListSubheaderUI';

type MapSettingBuringFieldUIProps = {
  sliderValue: number;
  handleSliderChange: (event: Event, newValue: number | number[]) => void;
};

const MapSettingBuringFieldUI = ({
  sliderValue,
  handleSliderChange,
}: MapSettingBuringFieldUIProps) => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI
        title="버닝필드"
        subtitle={`${sliderValue}단계 적용중`}
        subtitleImportant={true}
      />

      <Box sx={{ mr: 1, ml: 1 }}>
        <BurningFieldSliderUI
          value={sliderValue}
          onChange={handleSliderChange}
          step={1}
          marks
          min={0}
          max={10}
          valueLabelDisplay="auto"
        />
      </Box>
    </ListItem>
  );
};

export default MapSettingBuringFieldUI;
