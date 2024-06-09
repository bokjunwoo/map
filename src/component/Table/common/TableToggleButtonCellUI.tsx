import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { TableCell, IconButton } from '@mui/material';

type TableToggleButtonCellUIProps = {
  open: boolean;
  toggleOpen: () => void;
  padding?: number;
};

const TableToggleButtonCellUI = ({
  open,
  toggleOpen,
  padding,
}: TableToggleButtonCellUIProps) => {
  return (
    <TableCell sx={{ width: 10, p: padding || 0 }}>
      <IconButton
        onClick={toggleOpen}
        aria-label={open ? '상세정보 닫기' : '상세정보 열기'}
      >
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
    </TableCell>
  );
};

export default TableToggleButtonCellUI;
