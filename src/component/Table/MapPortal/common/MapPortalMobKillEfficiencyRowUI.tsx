import { TableRow } from '@mui/material';
import TableThCellUI from '../../common/TableThCellUI';
import TimeColorTableCellUI from '../../common/TimeColorTableCellUI';

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
          <TimeColorTableCellUI
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
