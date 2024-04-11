import { ListItemText } from '@mui/material';

const ListSubheaderUI = ({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) => {
  return (
    <ListItemText
      primary={title}
      secondary={subtitle}
      primaryTypographyProps={{ fontSize: 16, fontWeight: 600 }}
      secondaryTypographyProps={{ fontSize: 12 }}
    ></ListItemText>
  );
};

export default ListSubheaderUI;
