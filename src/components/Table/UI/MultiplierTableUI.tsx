import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../atoms/userLevelState';
import { TIME_OPTIONS } from '../../../constants/constants';
import { MapInfo } from '../../../interface/map';
import { calculateExpPercentage } from '../../../utils/calculate';
import { formatNumber } from '../../../utils/etc';

type MultiplierTableUIProps = {
  item: MapInfo;
  expReward: number;
  pureMesoReward: number;
  bonusMesoReward: number;
};

const MultiplierTableUI = ({
  item,
  expReward,
  pureMesoReward,
  bonusMesoReward,
}: MultiplierTableUIProps) => {
  const userLevel = useRecoilValue(userLevelState);

  return (
    <Table
      size="small"
      aria-label="monster_multiplier"
      sx={{
        border: '1px solid #ddd',
        th: { fontWeight: 500 },
        td: { fontSize: 13 },
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell align="center">마릿수</TableCell>
          <TableCell align="center">경험치</TableCell>
          <TableCell align="center">순 메소</TableCell>
          <TableCell align="center">메획 메소</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        <TableRow sx={{ bgcolor: '#FFFFCC' }}>
          <TableCell component="th" scope="row">
            1젠
          </TableCell>
          <TableCell align="center">
            {item.number_of_monster.toLocaleString()}
          </TableCell>
          <TableCell align="center">
            {formatNumber(expReward / 8)} (
            {calculateExpPercentage({
              userLevel,
              expReward: expReward / 8,
            })}
            %)
          </TableCell>
          <TableCell align="center">
            {formatNumber(pureMesoReward / 8)}
          </TableCell>
          <TableCell align="center">
            {formatNumber(bonusMesoReward / 8)}
          </TableCell>
        </TableRow>

        {TIME_OPTIONS.map((row, index) => (
          <TableRow key={index} hover>
            <TableCell component="th" scope="row">
              {row.time}
            </TableCell>
            <TableCell align="center">
              {(item.number_of_monster * 8 * row.multiplier).toLocaleString()}
            </TableCell>
            <TableCell align="center">
              {formatNumber(expReward * row.multiplier)} (
              {calculateExpPercentage({
                userLevel,
                expReward: expReward * row.multiplier,
              })}
              %)
            </TableCell>
            <TableCell align="center">
              {formatNumber(pureMesoReward * row.multiplier)}
            </TableCell>
            <TableCell align="center">
              {formatNumber(bonusMesoReward * row.multiplier)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MultiplierTableUI;
