import { TableRow } from '@mui/material';
import SelectBoxUI from '../../../common/Input/SelectBoxUI';
import TableThCellUI from '../../common/TableThCellUI';
import ActiveExpRewardCellUI from './ActiveExpRewardCellUI';

type MapContentExpRewardRowUIProps = {
  mapInfo: MapInfo;
  th: SelectThOption;
  expRewardOptions: ExpRewardOption[];
};

const MapContentExpRewardRowUI = ({
  mapInfo,
  th,
  expRewardOptions,
}: MapContentExpRewardRowUIProps) => {
  return (
    <TableRow>
      {th.onCountChange && th.menuItem ? (
        <TableThCellUI p={0}>
          <SelectBoxUI
            selectedValue={th.selectedValue}
            handleChange={th.onCountChange}
            menuItem={th.menuItem}
          />
        </TableThCellUI>
      ) : (
        <TableThCellUI p="6px 16px">{th.countLabel}</TableThCellUI>
      )}

      {expRewardOptions.map((item, index) => {
        return (
          <ActiveExpRewardCellUI
            key={index}
            mapInfo={mapInfo}
            item={item}
            selectedValue={th.selectedValue}
          />
        );
      })}
    </TableRow>
  );
};

export default MapContentExpRewardRowUI;
