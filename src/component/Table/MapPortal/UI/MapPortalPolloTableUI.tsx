import { TableBody } from '@mui/material';
import TableUI from '../../common/TableUI';
import MapPortalCleerTimeRowUI from '../common/MapPortalCleerTimeRowUI';
import MapPortalExpRewardRowUI from '../common/MapPortalExpRewardRowUI';
import MapPortalHeadUI from '../common/MapPortalHeadUI';
import MapPortalMobKillEfficiencyRowUI from '../common/MapPortalMobKillEfficiencyRowUI';

type MapPortalPolloTableUIProps = {
  mapInfo: MapInfo;
  polloPortalTypeList: PortalTypeList[];
};

const MapPortalPolloTableUI = ({
  mapInfo,
  polloPortalTypeList,
}: MapPortalPolloTableUIProps) => {
  return (
    <TableUI
      ariaLabel="map_portal_Pollo_table"
      sx={{
        border: '1px solid #ddd',
        '& th': {
          borderRight: '1px solid #e0e0e0',
          fontSize: 13,
          fontWeight: 500,
        },
        '& td': {
          borderRight: '1px solid #e0e0e0',
        },
      }}
    >
      <MapPortalHeadUI portalTypeList={polloPortalTypeList} />

      <TableBody>
        <MapPortalCleerTimeRowUI portalTypeList={polloPortalTypeList} />

        <MapPortalExpRewardRowUI
          mapInfo={mapInfo}
          portalTypeList={polloPortalTypeList}
        />

        <MapPortalMobKillEfficiencyRowUI
          mapInfo={mapInfo}
          portalTypeList={polloPortalTypeList}
        />
      </TableBody>
    </TableUI>
  );
};

export default MapPortalPolloTableUI;
