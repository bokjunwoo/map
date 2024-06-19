import {
  TableHead,
  TableRow,
  SelectChangeEvent,
  TableBody,
} from '@mui/material';
import SelectBoxUI from '../../common/Input/SelectBoxUI';
import ActiveExpRewardCellUI from './ActiveExpRewardCellUI';
import ActiveTextCellUI from './ActiveTextCellUI';
import TableThCellUI from './TableThCellUI';
import TableUI from './TableUI';

type MapSelcetExpRewardTableUIProps = {
  mapInfo: MapInfo;
  count: number;
  onCountChange: (event: SelectChangeEvent<unknown>) => void;
  activeCell: number;
  onCellClick: (columnIndex: number) => void;
  tableHead: SelectValue[];
  menuItem: SelectValue[];
  mobKillCount: number;
  expMultiplier: number;
  isLevelProportional: boolean;
};

const MapSelcetExpRewardTableUI = ({
  mapInfo,
  count,
  onCountChange,
  activeCell,
  onCellClick,
  tableHead,
  menuItem,
  mobKillCount,
  expMultiplier,
  isLevelProportional,
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
      <TableHead>
        <TableRow>
          <TableThCellUI width="17%" />
          {tableHead.map((head) => (
            <ActiveTextCellUI
              key={head.value}
              value={head.value}
              activeCell={activeCell}
              onCellClick={onCellClick}
              text={head.label}
            />
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        <TableRow>
          <TableThCellUI>1회</TableThCellUI>
          {tableHead.map((head) => (
            <ActiveExpRewardCellUI
              key={head.value}
              mapInfo={mapInfo}
              mobKillCount={mobKillCount}
              expMultiplier={expMultiplier}
              isLevelProportional={isLevelProportional}
              runeValue={head.value}
              selectedValue={1}
              activeCell={activeCell}
              onCellClick={onCellClick}
            />
          ))}
        </TableRow>

        <TableRow>
          <TableThCellUI p={0}>
            <SelectBoxUI
              selectedValue={count}
              handleChange={onCountChange}
              menuItem={menuItem}
            />
          </TableThCellUI>
          {tableHead.map((head) => (
            <ActiveExpRewardCellUI
              key={head.value}
              mapInfo={mapInfo}
              mobKillCount={mobKillCount}
              expMultiplier={expMultiplier}
              isLevelProportional={isLevelProportional}
              runeValue={head.value}
              selectedValue={count}
              activeCell={activeCell}
              onCellClick={onCellClick}
            />
          ))}
        </TableRow>
      </TableBody>
    </TableUI>
  );
};

export default MapSelcetExpRewardTableUI;
