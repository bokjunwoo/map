import { TableRow, TableCell, Collapse, List } from '@mui/material';
import FAQListUI from '../../ListUI/FAQListUI';

type FAQCollapseUIProps = {
  open: boolean;
  FAQ: FAQI;
};

const FAQCollapseUI = ({ open, FAQ }: FAQCollapseUIProps) => {
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
            <FAQListUI FAQ={FAQ} />
          </List>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default FAQCollapseUI;
