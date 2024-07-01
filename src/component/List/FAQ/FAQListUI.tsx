import { ListItem, ListItemText } from '@mui/material';

const FAQListUI = ({ item }: FAQProps) => {
  return (
    <ListItem sx={{ pt: 0.3, pb: 0.3 }}>
      <ListItemText
        primary={`A${item.id}. ${item.answer}`}
        primaryTypographyProps={{ fontSize: 13, pl: '8px' }}
      />
    </ListItem>
  );
};

export default FAQListUI;
