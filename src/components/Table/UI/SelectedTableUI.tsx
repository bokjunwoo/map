import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  SelectChangeEvent,
} from '@mui/material';
import SelectedBoosterUI from '../../common/SelectedBoosterUI';
import RuneExpCellUI from './RuneExpCellUI';

type HeadCell = {
  value: number;
  label: string;
};

type MenuItem = {
  value: number;
  label: string;
};

type SelectedTableUIProps = {
  mosterExpReward: number;
  headCells: HeadCell[];
  menuItem: MenuItem[];
  selectedValue: number;
  handleChange: (event: SelectChangeEvent) => void;
  clickedColumn: number;
  handleCellClick: (columnIndex: number) => void;
  mapName: string;
  killMonsterCount: number;
};

const SelectedTableUI = ({
  mosterExpReward,
  headCells,
  menuItem,
  selectedValue,
  handleChange,
  clickedColumn,
  handleCellClick,
  mapName,
  killMonsterCount,
}: SelectedTableUIProps) => {
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
          fontSize: 13,
          fontWeight: 500,
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
            <RuneExpCellUI
              key={head.label}
              mosterExpReward={mosterExpReward}
              clickedColumn={clickedColumn}
              head={head}
              handleCellClick={handleCellClick}
              killMonsterCount={killMonsterCount}
              mapName={mapName}
            />
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
            <RuneExpCellUI
              key={head.label}
              mosterExpReward={mosterExpReward * selectedValue}
              clickedColumn={clickedColumn}
              head={head}
              handleCellClick={handleCellClick}
              killMonsterCount={killMonsterCount}
              mapName={mapName}
            />
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default SelectedTableUI;
