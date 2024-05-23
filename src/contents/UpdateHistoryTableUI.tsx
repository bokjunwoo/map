import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from '@mui/material';
import UpdateHistoryRow from '../components/Table/History/UpdateHistoryRow';
import { updateHistory } from '../data/update';

const UpdateHistoryTableUI = () => {
  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 650 }}
        size="small"
        aria-label="update_history_table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ pl: 0, fontSize: 18 }} colSpan={2}>
              업데이트 정보
            </TableCell>
          </TableRow>
        </TableHead>

        {updateHistory.map((history) => {
          return <UpdateHistoryRow history={history} key={history.version} />;
        })}
      </Table>
    </TableContainer>
  );
};

export default UpdateHistoryTableUI;
