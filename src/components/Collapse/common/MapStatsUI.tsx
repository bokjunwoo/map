import { ListItem, Box } from '@mui/material';
import { RateListOption, CheckBoxGroup } from '../../../interface/stats';
import ListSubheaderUI from '../../common/ListSubheaderUI';
import StackedListUI from '../../common/StackedListUI';

type MapStatsUIProps = {
  rateList?: RateListOption[];
  checkBoxList?: CheckBoxGroup;
};

const MapStatsUI = ({ rateList, checkBoxList }: MapStatsUIProps) => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI title="적용된 스탯" />

      <Box sx={{ mb: 1 }}>
        <StackedListUI rateList={rateList} checkBoxList={checkBoxList} />
      </Box>
    </ListItem>
  );
};

export default MapStatsUI;
