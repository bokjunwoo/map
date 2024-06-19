import { TableBody } from '@mui/material';
import useToggle from '../../../hooks/useToggle';
import FAQCollapseUI from '../../Collapse/FAQ/FAQCollapseUI';
import TableRowUI from '../common/TableRowUI';
import TableToggleButtonCellUI from '../common/TableToggleButtonCellUI';
import FAQCellUI from './FAQCellUI';

const FAQTableBodyUI = ({ item }: FAQProps) => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <TableBody>
      <TableRowUI open={isOpen} hover={true}>
        <TableToggleButtonCellUI open={isOpen} toggleOpen={toggleOpen} />

        <FAQCellUI item={item} />
      </TableRowUI>

      <FAQCollapseUI item={item} open={isOpen} />
    </TableBody>
  );
};

export default FAQTableBodyUI;
