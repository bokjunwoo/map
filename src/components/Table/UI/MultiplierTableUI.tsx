import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { MapInfo } from '../../../interface/map';
import { formatNumber } from '../../../utils/etc';

type MultiplierTableUIProps = {
  item: MapInfo;
  expReward: number;
  mesoReward: number;
  timeOptions: { time: string; multiplier: number }[];
};

const MultiplierTableUI = ({
  item,
  expReward,
  mesoReward,
  timeOptions,
}: MultiplierTableUIProps) => {
  return (
    <Table
      size="small"
      aria-label="monster_multiplier"
      sx={{ border: '1px solid #ddd' }}
    >
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell align="center">마릿수</TableCell>
          <TableCell align="center">경험치</TableCell>
          <TableCell align="center">순 메소</TableCell>
          <TableCell align="center">매획 메소</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {timeOptions.map((row, index) => (
          <TableRow key={index} hover>
            <TableCell component="th" scope="row">
              {row.time}
            </TableCell>
            <TableCell align="center">
              {(item.number_of_monster * 8 * row.multiplier).toLocaleString()}
            </TableCell>
            <TableCell align="center">
              {formatNumber(expReward * row.multiplier)}
            </TableCell>
            <TableCell align="center">
              {formatNumber(mesoReward * row.multiplier)}
            </TableCell>
            <TableCell align="center">2</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MultiplierTableUI;
