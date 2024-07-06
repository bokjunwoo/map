import { Box } from '@mui/material';
import ListItemStyle from '../style/ListItemStyle';
import ListSubTitleUI from './ListSubTitleUI';
import StackedStatsListUI from './StackedStatsListUI';

type MapStatsUIProps = {
  rateList?: RateListOption[];
  checkBoxList?: CheckBoxGroup;
  buffButtonOption?: BuffButtonOption;
};

const MapStatsUI = ({
  rateList,
  checkBoxList,
  buffButtonOption,
}: MapStatsUIProps) => {
  return (
    <ListItemStyle>
      <ListSubTitleUI
        title="적용된 스탯"
        subtitle="7월 7일 선데이 폴로/프리토 경험치 3배 적용중!!"
        subtitleImportant={true}
      />

      <Box sx={{ mb: 1 }}>
        <StackedStatsListUI
          rateList={rateList}
          checkBoxList={checkBoxList}
          buffButtonOption={buffButtonOption}
        />
      </Box>
    </ListItemStyle>
  );
};

export default MapStatsUI;
