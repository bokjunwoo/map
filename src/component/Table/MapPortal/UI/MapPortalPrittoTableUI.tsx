import { TableBody } from '@mui/material';
import TableUI from '../../common/TableUI';
import MapPortalCleerTimeRowUI from '../common/MapPortalCleerTimeRowUI';
import MapPortalExpRewardRowUI from '../common/MapPortalExpRewardRowUI';
import MapPortalHeadUI from '../common/MapPortalHeadUI';
import MapPortalMobKillEfficiencyRowUI from '../common/MapPortalMobKillEfficiencyRowUI';
import MapPortalSelectRowUI from '../common/MapPortalSelectRowUI';

type MapPortalPrittoTableUIProps = {
  mapInfo: MapInfo;
  prittoPortalTypeList: PortalTypeList[];
};

const MapPortalPrittoTableUI = ({
  mapInfo,
  prittoPortalTypeList,
}: MapPortalPrittoTableUIProps) => {
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
      <MapPortalHeadUI portalTypeList={prittoPortalTypeList} />

      <TableBody>
        <MapPortalSelectRowUI portalTypeList={prittoPortalTypeList} />

        <MapPortalCleerTimeRowUI portalTypeList={prittoPortalTypeList} />

        <MapPortalExpRewardRowUI
          mapInfo={mapInfo}
          portalTypeList={prittoPortalTypeList}
        />

        <MapPortalMobKillEfficiencyRowUI
          mapInfo={mapInfo}
          portalTypeList={prittoPortalTypeList}
        />
      </TableBody>
    </TableUI>
  );
};

export default MapPortalPrittoTableUI;
