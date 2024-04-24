import { ListItem } from '@mui/material';
import { MapInfo } from '../../../../interface/map';
import ListSubheaderUI from '../../../common/ListSubheaderUI';
import NumberOfMonsterInput from '../../../TextField/NumberOfMonsterInput';

type MapCalculateInputUIProps = {
  item: MapInfo;
};

const MapCalculateInputUI = ({ item }: MapCalculateInputUIProps) => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI title="마릿수 설정" />

      <NumberOfMonsterInput text="1젠당 잡을 수 있는 마릿수" item={item} />
    </ListItem>
  );
};

export default MapCalculateInputUI;
