import { TableBody } from '@mui/material';
import TableUI from '../../common/TableUI';
import MapContentExpRewardRowUI from './MapContentExpRewardRowUI';
import MapContentHeadUI from './MapContentHeadUI';

type MapSelcetExpRewardTableUIProps = {
  mapInfo: MapInfo;
  selcectThOption: SelectThOption[];
  expRewardOptions: ExpRewardOption[];
};

const MapSelcetExpRewardTableUI = ({
  mapInfo,
  selcectThOption,
  expRewardOptions,
}: MapSelcetExpRewardTableUIProps) => {
  return (
    <TableUI
      ariaLabel="map_select_exp_reward_table"
      sx={{
        border: '1px solid #ddd',
        '& td': {
          borderRight: '1px solid #e0e0e0',
          cursor: 'pointer',
        },
        '& th': {
          borderRight: '1px solid #e0e0e0',
          fontSize: 13,
          fontWeight: 500,
        },
      }}
    >
      <MapContentHeadUI expRewardOptions={expRewardOptions} />

      <TableBody>
        {selcectThOption.map((th, index) => {
          return (
            <MapContentExpRewardRowUI
              key={index}
              mapInfo={mapInfo}
              th={th}
              expRewardOptions={expRewardOptions}
            />
          );
        })}
      </TableBody>
    </TableUI>
  );
};

export default MapSelcetExpRewardTableUI;
