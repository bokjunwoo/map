import { ListItem, ListItemText } from '@mui/material';

type FAQListUIProps = {
  FAQ: FAQI;
};

const FAQListUI = ({ FAQ }: FAQListUIProps) => {
  return (
    <ListItem sx={{ pt: 0, pb: 0 }}>
      <ListItemText
        primary={`A${FAQ.id}. ${FAQ.answer}`}
        primaryTypographyProps={{ fontSize: 13, pl: '8px' }}
      />
    </ListItem>
  );
};

export default FAQListUI;
