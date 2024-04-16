import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useExpRateValue } from '../../../contexts/ExpRateStateProvider';
import { formatNumber } from '../../../utils/etc';
import SelectedBoosterUI from '../../common/SelectedBoosterUI';

type HeadCell = {
  value: number;
  label: string;
};

type MenuItem = {
  value: number;
  label: string;
};

type SelectedTableUIProps = {
  selectedValue: number;
  handleChange: (event: SelectChangeEvent) => void;
  headCells: HeadCell[];
  menuItem: MenuItem[];
  clickedColumn: number;
  handleCellClick: (columnIndex: number) => void;
  totalMonsterExperience: number;
  burningField: number;
};

const SelectedTableUI = ({
  selectedValue,
  handleChange,
  headCells,
  menuItem,
  clickedColumn,
  handleCellClick,
  totalMonsterExperience,
  burningField,
}: SelectedTableUIProps) => {
  const expRate = useExpRateValue();

  const calculateRuneExpReward = (rune: number) => {
    return totalMonsterExperience * ((expRate + burningField + rune) / 100);
  };

  return (
    <Table
      size="small"
      aria-label="monster_multiplier"
      sx={{
        border: '1px solid #e0e0e0',
        '& td': {
          borderRight: '1px solid #e0e0e0',
          cursor: 'pointer',
        },
        '& th': {
          borderRight: '1px solid #e0e0e0',
        },
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell sx={{ width: 80, bgcolor: '#F4F4F4' }} />
          {headCells.map((head) => (
            <TableCell
              key={head.label}
              align="center"
              sx={{
                bgcolor: clickedColumn === head.value ? '#FFFFCC' : '',
                cursor: 'pointer',
              }}
              onClick={() => handleCellClick(head.value)}
            >
              {head.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row" sx={{ bgcolor: '#F4F4F4' }}>
            1회
          </TableCell>
          {headCells.map((head) => (
            <TableCell
              key={head.label}
              align="center"
              sx={{
                p: 0.5,
                bgcolor: clickedColumn === head.value ? '#FFFFCC' : '',
                fontSize: 13,
              }}
              onClick={() => handleCellClick(head.value)}
            >
              {formatNumber(calculateRuneExpReward(head.value))}
              <br />
              <Typography component="span" sx={{ fontSize: 12 }}>
                (약 1분의 효율)
              </Typography>
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell
            component="th"
            scope="row"
            sx={{ p: 0, bgcolor: '#F4F4F4' }}
          >
            <SelectedBoosterUI
              selectedValue={selectedValue}
              handleChange={handleChange}
              menuItem={menuItem}
            />
          </TableCell>
          {headCells.map((head) => (
            <TableCell
              key={head.label}
              align="center"
              sx={{
                p: 0.5,
                m: 'auto',
                bgcolor: clickedColumn === head.value ? '#FFFFCC' : '',
                fontSize: 13,
              }}
              onClick={() => handleCellClick(head.value)}
            >
              {formatNumber(calculateRuneExpReward(head.value) * selectedValue)}
              <br />
              <Typography component="span" sx={{ fontSize: 12 }}>
                (약 1분의 효율)
              </Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default SelectedTableUI;
