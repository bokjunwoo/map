import { SelectChangeEvent, TableBody } from '@mui/material';
import TableUI from '../../common/TableUI';
import MapPortalCleerTimeRowUI from '../common/MapPortalCleerTimeRowUI';
import MapPortalExpRewardRowUI from '../common/MapPortalExpRewardRowUI';
import MapPortalHeadUI from '../common/MapPortalHeadUI';
import MapPortalMobKillEfficiencyRowUI from '../common/MapPortalMobKillEfficiencyRowUI';
import MapPortalSpecialSelectRow from '../MapPortalSpecialSelectRow';

type MapPortalSpecialTableUIProps = {
  mapInfo: MapInfo;
  specialPortalTypeList: PortalTypeList[];
  wolfExpMultiplier: number;
  handleWolfExpMultiplierChange: (event: SelectChangeEvent<unknown>) => void;
};

const MapPortalSpecialTableUI = ({
  mapInfo,
  specialPortalTypeList,
  wolfExpMultiplier,
  handleWolfExpMultiplierChange,
}: MapPortalSpecialTableUIProps) => {
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
      <MapPortalHeadUI portalTypeList={specialPortalTypeList} />

      <TableBody>
        <MapPortalSpecialSelectRow
          wolfExpMultiplier={wolfExpMultiplier}
          handleWolfExpMultiplierChange={handleWolfExpMultiplierChange}
        />

        <MapPortalCleerTimeRowUI portalTypeList={specialPortalTypeList} />

        <MapPortalExpRewardRowUI
          mapInfo={mapInfo}
          portalTypeList={specialPortalTypeList}
        />

        <MapPortalMobKillEfficiencyRowUI
          mapInfo={mapInfo}
          portalTypeList={specialPortalTypeList}
        />
      </TableBody>
    </TableUI>
  );
};

export default MapPortalSpecialTableUI;
