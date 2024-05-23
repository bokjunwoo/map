import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from '@mui/material';
import FAQRow from '../components/Table/FAQRow/FAQRow';
import { FAQ } from '../data/FAQ';

const FAQTableUI = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="FAQ_table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ pl: 0, fontSize: 18 }} colSpan={2}>
              FAQ. 자주 묻는 질문
            </TableCell>
          </TableRow>
        </TableHead>

        {FAQ.map((FAQ) => {
          return <FAQRow FAQ={FAQ} key={FAQ.id} />;
        })}
      </Table>
    </TableContainer>
  );
};

export default FAQTableUI;
