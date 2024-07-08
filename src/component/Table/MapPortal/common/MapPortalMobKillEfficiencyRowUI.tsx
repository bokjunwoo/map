import { TableRow } from '@mui/material';
import PortalExpEfficiencyCellUI from '../../common/PortalExpEfficiencyCellUI';
import TableThCellUI from '../../common/TableThCellUI';

type MapPortalMobKillEfficiencyRowUIProps = {
  mapInfo: MapInfo;
  portalTypeList: PortalTypeList[];
};

const MapPortalMobKillEfficiencyRowUI = ({
  mapInfo,
  portalTypeList,
}: MapPortalMobKillEfficiencyRowUIProps) => {
  return (
    <TableRow>
      <TableThCellUI align="center" p={0}>
        사냥 효율
      </TableThCellUI>

      {portalTypeList.map(
        ({ label, type, playTime, expMultiplier, getTimeColor }) => (
          <PortalExpEfficiencyCellUI
            key={label}
            mapInfo={mapInfo}
            type={type}
            playTime={playTime}
            expMultiplier={expMultiplier}
            getTimeColor={getTimeColor}
          />
        )
      )}
    </TableRow>
  );
};

export default MapPortalMobKillEfficiencyRowUI;
