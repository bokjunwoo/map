import { TableBody } from '@mui/material';
import useToggle from '../../../hooks/useToggle';
import HistoryCollapseUI from '../../Collapse/History/HistoryCollapseUI';
import TableRowUI from '../common/TableRowUI';
import TableToggleButtonCellUI from '../common/TableToggleButtonCellUI';
import HistoryCellUI from './HistoryCellUI';

const HistoryTableBodyUI = ({ item }: HistoryProps) => {
  const [isOpen, toggleOpen] = useToggle(item.isOpen);

  return (
    <TableBody>
      <TableRowUI open={isOpen} hover={true}>
        <TableToggleButtonCellUI open={isOpen} toggleOpen={toggleOpen} />

        <HistoryCellUI item={item} />
      </TableRowUI>

      <HistoryCollapseUI item={item} open={isOpen} />
    </TableBody>
  );
};

export default HistoryTableBodyUI;
