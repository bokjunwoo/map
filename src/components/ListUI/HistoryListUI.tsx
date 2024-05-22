import { ListItem, ListItemText } from '@mui/material';
import HistoryItemListUI from './HistoryItemListUI';

type HistoryListUIProps = {
  history: Category;
  index: number;
};

const HistoryListUI = ({ history, index }: HistoryListUIProps) => {
  return (
    <ListItem sx={{ pt: 0, pb: 0 }}>
      <ListItemText
        primary={`${index + 1}. ${history.title}`}
        primaryTypographyProps={{ fontSize: 15, pl: '2px' }}
        secondary={history.items.map((item) => {
          return <HistoryItemListUI item={item} key={item} />;
        })}
        secondaryTypographyProps={{ pl: '16px', fontSize: 12 }}
      />
    </ListItem>
  );
};

export default HistoryListUI;
