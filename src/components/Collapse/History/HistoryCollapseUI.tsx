import { TableRow, TableCell, Collapse, List } from '@mui/material';
import HistoryListUI from '../../ListUI/HistoryListUI';

type HistoryCollapseUIProps = {
  open: boolean;
  history: Category[];
};

const HistoryCollapseUI = ({ open, history }: HistoryCollapseUIProps) => {
  return (
    <TableRow>
      <TableCell
        sx={{
          paddingBottom: 0,
          paddingTop: 0,
          borderBottom: open ? '' : 'none',
        }}
        colSpan={2}
      >
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List>
            {history.map((history, index) => {
              return (
                <HistoryListUI history={history} index={index} key={index} />
              );
            })}
          </List>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default HistoryCollapseUI;
