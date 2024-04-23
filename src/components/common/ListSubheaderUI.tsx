import { ListItemText } from '@mui/material';

const ListSubheaderUI = ({
  title,
  subtitle,
  subtitleImportant,
}: {
  title: string;
  subtitle?: string;
  subtitleImportant?: boolean;
}) => {
  return (
    <ListItemText
      primary={title}
      secondary={subtitle}
      primaryTypographyProps={{ fontSize: 16, fontWeight: 600 }}
      secondaryTypographyProps={{
        fontSize: 12,
        color: subtitleImportant ? '#D32F2F' : 'text.secondary',
      }}
    ></ListItemText>
  );
};

export default ListSubheaderUI;
