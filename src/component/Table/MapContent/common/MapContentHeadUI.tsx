import { TableHead, TableRow } from '@mui/material';
import TableThCellUI from '../../common/TableThCellUI';
import ActiveTextCellUI from './ActiveTextCellUI';

const MapContentHeadUI = ({ expRewardOptions }: ExpRewardOptionProps) => {
  const columnWidth = (100 - 13) / expRewardOptions.length;

  return (
    <TableHead>
      <TableRow>
        <TableThCellUI width="17%" />

        {expRewardOptions.map((item, index) => (
          <ActiveTextCellUI key={index} item={item} columnWidth={columnWidth} />
        ))}
      </TableRow>
    </TableHead>
  );
};

export default MapContentHeadUI;
