import { Box } from '@mui/material';
import ListSubTitleUI from '../../../List/common/ListSubTitleUI';
import MapCalculateMobStatsUI from '../../../List/MapCalaulate/MapCalculateMobStatsUI';
import ListItemStyle from '../../../List/style/ListItemStyle';
import MapCalculateMobResultTable from '../../../Table/MapCalculate/MapCalculateMobResultTable';

const MapCalculateMobResultSection = ({ mapInfo }: MapInfoProps) => {
  return (
    <ListItemStyle>
      <Box sx={{ display: 'flex', alignItems: 'top' }}>
        <ListSubTitleUI title="계산 결과" />

        <MapCalculateMobStatsUI mapInfo={mapInfo} />
      </Box>

      <MapCalculateMobResultTable mapInfo={mapInfo} />
    </ListItemStyle>
  );
};

export default MapCalculateMobResultSection;
