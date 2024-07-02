import { TableRow } from '@mui/material';
import TableThCellUI from '../../common/TableThCellUI';
import ActiveExpEfficiencyCellUI from './ActiveExpEfficiencyCellUI';

type MapContentExpEfficiencyRowUIProps = {
  mapInfo: MapInfo;
  expRewardOptions: ExpRewardOption[];
};

const MapContentExpEfficiencyRowUI = ({
  mapInfo,
  expRewardOptions,
}: MapContentExpEfficiencyRowUIProps) => {
  return (
    <TableRow>
      <TableThCellUI p={0} align="center">
        사냥 효율
      </TableThCellUI>

      {expRewardOptions.map((item, index) => {
        return (
          <ActiveExpEfficiencyCellUI
            key={index}
            mapInfo={mapInfo}
            item={item}
          />
        );
      })}
    </TableRow>
  );
};

export default MapContentExpEfficiencyRowUI;
