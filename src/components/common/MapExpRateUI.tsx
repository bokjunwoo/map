import { ListItem, Box } from '@mui/material';
import { useExpRateValue } from '../../contexts/ExpRateStateProvider';
import ResourceChip from '../Chip/ResourceChip';
import ListSubheaderUI from './ListSubheaderUI';

type MapExpRateUIProps = {
  burningField: number;
  rune: number;
};

const MapExpRateUI = ({ burningField, rune }: MapExpRateUIProps) => {
  const expRate = useExpRateValue();

  const resourceList = [
    { iconName: 'exp', label: expRate, color: '#bfff8a' },
    { iconName: 'burning', label: burningField, color: '#fcaeae' },
    { iconName: 'rune', label: rune, color: '#ecd1ff' },
  ];

  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI title="적용된 스탯" />

      <Box sx={{ mb: 1 }}>
        <ResourceChip resourceList={resourceList} />
      </Box>
    </ListItem>
  );
};

export default MapExpRateUI;
