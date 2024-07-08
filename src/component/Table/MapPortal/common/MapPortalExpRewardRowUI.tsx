import { TableRow } from '@mui/material';
import PortalExpRewardCellUI from '../../common/PortalExpRewardCellUI';
import TableThCellUI from '../../common/TableThCellUI';

type MapPortalExpRewardRowUIProps = {
  mapInfo: MapInfo;
  portalTypeList: PortalTypeList[];
};

const MapPortalExpRewardRowUI = ({
  mapInfo,
  portalTypeList,
}: MapPortalExpRewardRowUIProps) => {
  return (
    <TableRow>
      <TableThCellUI align="center" p={0}>
        경험치
      </TableThCellUI>

      {portalTypeList.map(({ label, type, expMultiplier }) => (
        <PortalExpRewardCellUI
          key={label}
          mapInfo={mapInfo}
          type={type}
          expMultiplier={expMultiplier}
        />
      ))}
    </TableRow>
  );
};

export default MapPortalExpRewardRowUI;
