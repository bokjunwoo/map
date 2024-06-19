import { ListItem, ListItemText } from '@mui/material';
import HistoryAdditionalListUI from './HistoryAdditionalListUI';

type HistoryListUIProps = {
  item: HistoryCategory;
  index: number;
};

const HistoryListUI = ({ item, index }: HistoryListUIProps) => {
  return (
    <ListItem sx={{ pt: 0, pb: 0 }}>
      <ListItemText
        primary={`${index + 1}. ${item.title}`}
        primaryTypographyProps={{ fontSize: 15, pl: '2px' }}
        secondary={item.list.map((text) => {
          return <HistoryAdditionalListUI key={text} text={text} />;
        })}
        secondaryTypographyProps={{ pl: '16px', fontSize: 12 }}
      />
    </ListItem>
  );
};

export default HistoryListUI;
