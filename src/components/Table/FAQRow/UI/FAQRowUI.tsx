import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import FAQCollapseUI from '../../../Collapse/FAQ/FAQCollapseUI';

type FAQRowUIProps = {
  FAQ: FAQI;
  isOpen: boolean;
  toggleOpen: () => void;
};

const FAQRowUI = ({ FAQ, isOpen, toggleOpen }: FAQRowUIProps) => {
  return (
    <TableBody>
      <TableRow hover sx={{ '& > *': { borderBottom: isOpen ? 'none' : '' } }}>
        <TableCell sx={{ width: 10, p: 0 }}>
          <IconButton
            onClick={toggleOpen}
            aria-label={isOpen ? '상세정보 닫기' : '상세정보 열기'}
          >
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row" sx={{ pl: 0 }}>
          <Typography component="span" sx={{ mr: 0.3 }} fontSize={14}>
            Q{FAQ.id}. {FAQ.question}
          </Typography>
        </TableCell>
      </TableRow>

      <FAQCollapseUI open={isOpen} FAQ={FAQ} />
    </TableBody>
  );
};

export default FAQRowUI;
