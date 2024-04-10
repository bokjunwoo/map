import { ListItem, ListItemText } from '@mui/material';

const ListSubtitleUI = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <ListItem>
      <ListItemText
        primary={title}
        secondary={subtitle}
        primaryTypographyProps={{ fontSize: 16, fontWeight: 600 }}
        secondaryTypographyProps={{ fontSize: 12 }}
      ></ListItemText>
    </ListItem>
  );
};

export default ListSubtitleUI;
