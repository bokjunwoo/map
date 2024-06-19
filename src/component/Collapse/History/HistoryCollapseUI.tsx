import { List } from '@mui/material';
import HistoryListUI from '../../List/History/HistoryListUI';
import CollapseCellUI from '../common/CollapseCellUI';

const HistoryCollapseUI = ({ item, open }: HistoryCollapseUIProps) => {
  return (
    <CollapseCellUI colSpan={2} open={open}>
      <List>
        {item.category.map((category, i) => {
          return <HistoryListUI key={item.id} item={category} index={i} />;
        })}
      </List>
    </CollapseCellUI>
  );
};

export default HistoryCollapseUI;
