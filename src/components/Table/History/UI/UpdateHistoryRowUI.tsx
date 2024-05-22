import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Chip,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import HistoryCollapseUI from '../../../Collapse/History/HistoryCollapseUI';

type UpdateHistoryRowUIProps = {
  history: UpdateHistory;
  isOpen: boolean;
  toggleOpen: () => void;
};

const UpdateHistoryRowUI = ({
  history,
  isOpen,
  toggleOpen,
}: UpdateHistoryRowUIProps) => {
  return (
    <TableBody>
      <TableRow hover sx={{ '& > *': { borderBottom: isOpen ? 'unset' : '' } }}>
        <TableCell sx={{ width: 10, p: 0 }}>
          <IconButton
            onClick={toggleOpen}
            aria-label={isOpen ? '상세정보 닫기' : '상세정보 열기'}
          >
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row" sx={{ pl: 0 }}>
          <Typography component="span" sx={{ mr: 0.3 }}>
            {history.date}
          </Typography>
          <Chip
            component="span"
            label={`ver. ${history.version}`}
            sx={{
              height: 16,
              fontSize: 12,
              '.MuiChip-label': {
                pr: 1,
                pl: 1,
              },
            }}
          />
        </TableCell>
      </TableRow>

      <HistoryCollapseUI open={isOpen} history={history.history} />
    </TableBody>
  );
};

export default UpdateHistoryRowUI;
